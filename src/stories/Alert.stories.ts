import Alert from "../Components/Alert";
import type {Meta, StoryObj} from "@storybook/react";

const meta: Meta = {
    title: "Alert",
    component: Alert,
};

type typeStoryObj = StoryObj<typeof Alert>;

export default meta;

export const Error: typeStoryObj = {
    args: {
        $title: "Error",
        $text: "This is an Error",
        $type: "error"
    },
}

export const Warning: typeStoryObj = {
    args: {
        $title: "Warning",
        $text: "This is a Warning",
        $type: "warning"
    },
}

export const Info: typeStoryObj = {
    args: {
        $title: "Info",
        $text: "This is an Info",
        $type: "info"
    },
}

export const Success: typeStoryObj = {
    args: {
        $title: "Success",
        $text: "This is a Success",
        $type: "success"
    },
}