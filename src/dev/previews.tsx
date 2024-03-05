import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import MainPage from "../week1/MainPage";
import TabArea from "../week2/area/TabArea";

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
        </Previews>
    );
};

export default ComponentPreviews;