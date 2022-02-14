import { RecoilRoot } from "recoil";
import { render } from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from "./App";
import { startup } from "./engine";

startup((params) => {
    render(
        <RecoilRoot>
            <App />
        </RecoilRoot>,
        document.getElementById('app'),
        () => { bridge.send("VKWebAppInit"); }
    )
})
