import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import MainPage from "../week1/MainPage";
import TabArea from "../week2/area/TabArea";
import App from "../App";
import ToDo from "../week2/component/ToDo";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/MainPage">
                <MainPage/>
            </ComponentPreview>
            <ComponentPreview path="/TabArea">
                <TabArea $gridArea={"H"}/>
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;