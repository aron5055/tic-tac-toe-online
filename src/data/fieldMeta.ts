export const fieldMeta = {
  username: {
    label: "用户名：",
    description: "游戏中的公开显示用户名，仅限字母、数字与下划线",
    placeholder: "your_username",
  },
  email: {
    label: "邮箱：",
    description: "绑定邮箱可用于找回密码",
    placeholder: "your.email@example.com",
  },
  password: {
    label: "密码：",
    description: "推荐 12 位以上强密码，至少 8 位",
    placeholder: "输入你的密码",
  },
  confirmPassword: {
    label: "确认密码：",
    description: "请再次输入密码以确认",
    placeholder: "重复输入密码",
  },
} as const;
