// config/theme.ts
import { theme } from 'antd';

// 自定义主题配置
const customTheme = {
  token: {
    colorPrimary: '#27ba9b',       // 主色
    colorSuccess: '#1dc779',      // 成功色
    colorWarning: '#ffb302',      // 警告色
    colorError: '#e26237',        // 危险色
    colorInfo: '#f1f3f8',         // 信息色
    
    // 其他相关颜色可以基于主色调整
    colorLink: '#27ba9b',         // 链接色使用主色
    colorLinkHover: '#1da58a',    // 链接悬停色
    colorLinkActive: '#178f75',   // 链接激活色
    
    // 如果需要，可以调整其他组件变量
    borderRadius: 6,              // 组件圆角
  },
  components: {
    // 特定组件定制
    Button: {
      colorPrimary: '#27ba9b',
      algorithm: true, // 启用算法
    },
    Input: {
      colorPrimary: '#27ba9b',
      algorithm: true,
    },
    Select: {
      colorPrimary: '#27ba9b',
      algorithm: true,
    },
    // 可以根据需要添加更多组件定制
  },
};

// 使用 Ant Design 的算法生成完整主题
const { defaultAlgorithm, defaultSeed } = theme;
const mapToken = defaultAlgorithm({
  ...defaultSeed,
  ...customTheme.token,
});

// 合并配置
const mergedTheme = {
  algorithm: [defaultAlgorithm],
  token: {
    ...mapToken,
    ...customTheme.token,
  },
  components: customTheme.components,
};

export default mergedTheme;