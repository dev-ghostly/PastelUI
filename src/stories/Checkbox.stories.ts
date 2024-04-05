import Checkbox from "../Components/Checkbox";
import type {Meta, StoryObj} from "@storybook/react";

const meta: Meta = {
    title: "Checkbox",
    component: Checkbox,
};

type typeStoryObj = StoryObj<typeof Checkbox>;

export default meta;

export const Checked: typeStoryObj = {
    args: {
        $checked: true,
        $label: "Checked",
    },
}

export const Unchecked: typeStoryObj = {
    args: {
        $checked: false,
        $label: "Unchecked",
    },
}