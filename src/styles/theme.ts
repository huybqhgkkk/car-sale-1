import type { ThemeConfig } from "antd"

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#ff812c",
    borderRadius: 2,
  },
  components: {
    Button: {
      colorPrimary: "#ff812c",
      algorithm: true,
    },
  },
}

export default theme