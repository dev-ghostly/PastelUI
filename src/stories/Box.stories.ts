import Box from "../Components/Box";
import type {Meta, StoryObj} from "@storybook/react";

const meta: Meta = {
    title: "Box",
    component: Box,
};

type typeStoryObj = StoryObj<typeof Box>;

export default meta;

export const Default: typeStoryObj = {
    args: {
        $width: "400px",
        $backgroundColor: "tomato",
        children: "This is a Box",
        $padding: "10px",
    },
}
