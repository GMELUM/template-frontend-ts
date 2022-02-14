import bridge from '@vkontakte/vk-bridge';
import setScheme from './module/scheme';

const eventBridge = (render: (params: URLSearchParams) => void) => {
    process.env.NODE_ENV === "development" && import("./module/eruda");
    const params = new URLSearchParams(window.location.search.slice(1));
    bridge.subscribe((event) => {
        const type = event.detail.type;
        const data = event.detail.data;

        switch ((type as any)) {
            case "VKWebAppUpdateConfig": setScheme(data, params); break;
        }
    });
    render(params);
};

export default eventBridge;