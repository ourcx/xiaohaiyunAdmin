"use client";
import { useState } from "react";
import Container from "@/components/container";
import "./page.modules.css"; // 导入外部CSS

type Settings = {
  general: {
    siteName: string;
    language: string;
    timezone: string;
  };
  account: {
    username: string;
    email: string;
    notifications: boolean;
    twoFactor: boolean;
  };
  appearance: {
    theme: string;
    fontSize: string;
    compactMode: boolean;
  };
  privacy: {
    dataCollection: boolean;
    personalizedAds: boolean;
    searchHistory: boolean;
  };
};

type Category = keyof Settings;
type Field<C extends Category> = keyof Settings[C];

export default function SettingPage() {
  const [activeTab, setActiveTab] = useState<Category>("general");
  const [settings, setSettings] = useState<Settings>({
    general: {
      siteName: "小海云后台",
      language: "zh-CN",
      timezone: "Asia/Shanghai"
    },
    account: {
      username: "admin",
      email: "admin@xiaohaiyun.com",
      notifications: true,
      twoFactor: false
    },
    appearance: {
      theme: "light",
      fontSize: "medium",
      compactMode: false
    },
    privacy: {
      dataCollection: false,
      personalizedAds: false,
      searchHistory: true
    }
  });

  const handleInputChange = <C extends Category, F extends Field<C>>(
    category: C,
    field: F,
    value: Settings[C][F]
  ) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const saveSettings = () => {
    // 这里可以添加保存设置的逻辑
    console.log("设置已保存:", settings);
    alert("设置已成功保存！");
  };

  const tabs = [
    { id: "general", name: "通用设置", icon: "⚙️" },
    { id: "account", name: "账户设置", icon: "👤" },
    { id: "appearance", name: "外观设置", icon: "🎨" },
    { id: "privacy", name: "隐私设置", icon: "🔒" }
  ];

  return (
      <div className="settingPage">
        <div className="settingContainer">
          <div className="settingCard">
            <div className="settingLayout">
              {/* 侧边栏导航 */}
              <div className="settingSidebar">
                <h2 className="settingTitle">设置</h2>
                <nav className="settingNav">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as Category)}
                      className={`settingTab ${activeTab === tab.id ? "settingTabActive" : ""}`}
                    >
                      <span className="settingTabIcon">{tab.icon}</span>
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              {/* 主内容区域 */}
              <div className="settingContent">
                <h2 className="settingContentTitle">
                  {tabs.find(tab => tab.id === activeTab)?.name}
                </h2>

                {/* 通用设置 */}
                {activeTab === "general" && (
                  <div className="settingSection">
                    <div className="settingField">
                      <label className="settingLabel">
                        站点名称
                      </label>
                      <input
                        type="text"
                        value={settings.general.siteName}
                        onChange={(e) => handleInputChange("general", "siteName", e.target.value)}
                        className="settingInput"
                      />
                    </div>

                    <div className="settingField">
                      <label className="settingLabel">
                        语言偏好
                      </label>
                      <select
                        value={settings.general.language}
                        onChange={(e) => handleInputChange("general", "language", e.target.value)}
                        className="settingSelect"
                      >
                        <option value="zh-CN">简体中文</option>
                        <option value="en-US">English</option>
                        <option value="ja-JP">日本語</option>
                      </select>
                    </div>

                    <div className="settingField">
                      <label className="settingLabel">
                        时区设置
                      </label>
                      <select
                        value={settings.general.timezone}
                        onChange={(e) => handleInputChange("general", "timezone", e.target.value)}
                        className="settingSelect"
                      >
                        <option value="Asia/Shanghai">中国标准时间 (UTC+8)</option>
                        <option value="America/New_York">美国东部时间 (UTC-5)</option>
                        <option value="Europe/London">格林尼治标准时间 (UTC+0)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* 账户设置 */}
                {activeTab === "account" && (
                  <div className="settingSection">
                    <div className="settingField">
                      <label className="settingLabel">
                        用户名
                      </label>
                      <input
                        type="text"
                        value={settings.account.username}
                        onChange={(e) => handleInputChange("account", "username", e.target.value)}
                        className="settingInput"
                      />
                    </div>

                    <div className="settingField">
                      <label className="settingLabel">
                        电子邮箱
                      </label>
                      <input
                        type="email"
                        value={settings.account.email}
                        onChange={(e) => handleInputChange("account", "email", e.target.value)}
                        className="settingInput"
                      />
                    </div>

                    <div className="settingCheckbox">
                      <input
                        type="checkbox"
                        id="notifications"
                        checked={settings.account.notifications}
                        onChange={(e) => handleInputChange("account", "notifications", e.target.checked)}
                        className="settingCheckboxInput"
                      />
                      <label htmlFor="notifications" className="settingCheckboxLabel">
                        启用邮件通知
                      </label>
                    </div>

                    <div className="settingCheckbox">
                      <input
                        type="checkbox"
                        id="twoFactor"
                        checked={settings.account.twoFactor}
                        onChange={(e) => handleInputChange("account", "twoFactor", e.target.checked)}
                        className="settingCheckboxInput"
                      />
                      <label htmlFor="twoFactor" className="settingCheckboxLabel">
                        启用双重认证
                      </label>
                    </div>
                  </div>
                )}

                {/* 外观设置 */}
                {activeTab === "appearance" && (
                  <div className="settingSection">
                    <div className="settingField">
                      <label className="settingLabel">
                        主题
                      </label>
                      <div className="settingThemeSelector">
                        <div 
                          className={`settingThemeOption ${settings.appearance.theme === "light" ? "settingThemeOptionActive" : ""}`}
                          onClick={() => handleInputChange("appearance", "theme", "light")}
                        >
                          <div className={`settingThemePreview settingThemeLight`}></div>
                          <p>浅色</p>
                        </div>
                        <div 
                          className={`settingThemeOption ${settings.appearance.theme === "dark" ? "settingThemeOptionActive" : ""}`}
                          onClick={() => handleInputChange("appearance", "theme", "dark")}
                        >
                          <div className={`settingThemePreview settingThemeDark`}></div>
                          <p>深色</p>
                        </div>
                      </div>
                    </div>

                    <div className="settingField">
                      <label className="settingLabel">
                        字体大小
                      </label>
                      <select
                        value={settings.appearance.fontSize}
                        onChange={(e) => handleInputChange("appearance", "fontSize", e.target.value)}
                        className="settingSelect"
                      >
                        <option value="small">小</option>
                        <option value="medium">中</option>
                        <option value="large">大</option>
                      </select>
                    </div>

                    <div className="settingCheckbox">
                      <input
                        type="checkbox"
                        id="compactMode"
                        checked={settings.appearance.compactMode}
                        onChange={(e) => handleInputChange("appearance", "compactMode", e.target.checked)}
                        className="settingCheckboxInput"
                      />
                      <label htmlFor="compactMode" className="settingCheckboxLabel">
                        紧凑模式
                      </label>
                    </div>
                  </div>
                )}

                {/* 隐私设置 */}
                {activeTab === "privacy" && (
                  <div className="settingSection">
                    <div className="settingCheckbox">
                      <input
                        type="checkbox"
                        id="dataCollection"
                        checked={settings.privacy.dataCollection}
                        onChange={(e) => handleInputChange("privacy", "dataCollection", e.target.checked)}
                        className="settingCheckboxInput"
                      />
                      <label htmlFor="dataCollection" className="settingCheckboxLabel">
                        允许匿名数据收集以改进产品
                      </label>
                    </div>

                    <div className="settingCheckbox">
                      <input
                        type="checkbox"
                        id="personalizedAds"
                        checked={settings.privacy.personalizedAds}
                        onChange={(e) => handleInputChange("privacy", "personalizedAds", e.target.checked)}
                        className="settingCheckboxInput"
                      />
                      <label htmlFor="personalizedAds" className="settingCheckboxLabel">
                        允许个性化广告
                      </label>
                    </div>

                    <div className="settingCheckbox">
                      <input
                        type="checkbox"
                        id="searchHistory"
                        checked={settings.privacy.searchHistory}
                        onChange={(e) => handleInputChange("privacy", "searchHistory", e.target.checked)}
                        className="settingCheckboxInput"
                      />
                      <label htmlFor="searchHistory" className="settingCheckboxLabel">
                        保存搜索历史
                      </label>
                    </div>

                    <div className="settingDataManagement">
                      <h3 className="settingDataTitle">数据管理</h3>
                      <div className="settingDataActions">
                        <button className="settingSecondaryButton">
                          导出数据
                        </button>
                        <button className="settingDangerButton">
                          删除所有数据
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 保存按钮 */}
                <div className="settingActions">
                  <button
                    onClick={saveSettings}
                    className="settingButton"
                  >
                    保存更改
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}