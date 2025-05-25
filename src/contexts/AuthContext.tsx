import supabase from "@/lib/supabase";
import type { User } from "@/types/game";
import type { Session } from "@supabase/supabase-js";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("获取 Session 时出错: ", error.message);
      }

      if (session?.user) {
        const userData = session.user;
        setUser({
          id: userData.id,
          username: userData.user_metadata.username as string,
        });
      } else {
        setUser(null);
      }
    };

    init()
      .catch((err) => console.error("init: ", err))
      .finally(() => setLoading(false));

    const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) => {
      setSession(session);
      if (session?.user) {
        const userData = session.user;
        setUser({
          id: userData.id,
          username: userData.user_metadata.username as string,
        });
      } else {
        setUser(null);
      }
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  const contextValue = useMemo(() => {
    return { user, session, loading };
  }, [user, session, loading]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
