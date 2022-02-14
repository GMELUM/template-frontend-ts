import { RecoilRoot } from "recoil";
import { render } from 'react-dom';
import { startup } from "./engine";
import bridge from '@vkontakte/vk-bridge';
import App from "./App";

startup(() => {
    const [app] = document.getElementsByTagName('app');
    render(
        <RecoilRoot>
            <App />
        </RecoilRoot>,
        app, () => { bridge.send("VKWebAppInit"); }
    )
})
