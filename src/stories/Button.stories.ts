import Button from "../Components/Button";
import type {Meta, StoryObj} from "@storybook/react";

const meta: Meta = {
    title: "Button",
    component: Button,
};

type typeStoryObj = StoryObj<typeof Button>;

export default meta;

export const Primary: typeStoryObj = {
    args: {
        children: "Primary",
        $color: "blue"
    },
}

export const Danger: typeStoryObj = {
    args: {
        $color: "red",
        children: "Danger"
    },
}

export const Success: typeStoryObj = {
    args: {
        $color: "green",
        children: "Success"
    },
}

export const Warning: typeStoryObj = {
    args: {
        $color: "orange",
        children: "Warning"
    },
}