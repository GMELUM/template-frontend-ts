import useBackPage from "./useBackPage";
import useNextPage from "./useNextPage";

const useRoute = () => {
    const nextPage = useNextPage();
    const backPage = useBackPage();

    return {
        nextPage,
        backPage
    }
}

export default useRoute;