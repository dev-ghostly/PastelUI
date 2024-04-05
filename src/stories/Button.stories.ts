import Button from "../Components/Button";
import type {Meta, StoryObj} from "@storybook/react";
import {Colors} from "../utils/colors";

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
    tags: ["Primary"]
}

export const Secondary: typeStoryObj = {
    args: {
        $color: "lightblue",
        children: "Secondary"
    },
}

export const Danger: typeStoryObj = {
    args: {
        $color: "red",
        children: "Danger"
    },
}