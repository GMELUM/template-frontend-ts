import bridge, { AppearanceSchemeType, AppearanceType } from '@vkontakte/vk-bridge';

const setScheme = (data: any, params: URLSearchParams) => {

    const scheme: AppearanceSchemeType = data.scheme;
    const platform = params.get("vk_platform") || "mobile_iphone";

    switch (platform) {
        case "mobile_web":
        case "mvk_external":
            document.body.setAttribute("platform", "mvk"); break;
        case "desktop_web":
        case "mobile_ipad":
        case "mobile_iphone":
        case "mobile_iphone_messenger":
        case "iphone_external":
        case "ipad_external":
        case "web_external":
            document.body.setAttribute("platform", "ios"); break;
        case "mobile_android":
        case "mobile_android_messenger":
        case "android_external":
            document.body.setAttribute("platform", "android"); break;
    }


    let statusBarStyle: AppearanceType;
    let actionBarColor: string;

    switch (scheme) {
        case "bright_light":
        case "client_light":
            statusBarStyle = "dark";
            actionBarColor = "#ffffff";
            document.body.setAttribute("scheme", "light"); break;
        case "client_dark":
        case "space_gray":
            statusBarStyle = "light";
            actionBarColor = "#19191a";
            document.body.setAttribute("scheme", "dark"); break;
        default:
            statusBarStyle = "light";
            actionBarColor = "#19191a";
            document.body.setAttribute("scheme", scheme); break;
    };

    if (bridge.supports('VKWebAppSetViewSettings')) {
        bridge.send('VKWebAppSetViewSettings', {
            'status_bar_style': statusBarStyle,
            'action_bar_color': actionBarColor,
            'navigation_bar_color': actionBarColor
        });
    }
}

export default setScheme;