import Accordion from "../Components/Accordion";
import type {Meta, StoryObj} from "@storybook/react";

const meta: Meta = {
    title: "Accordion",
    component: Accordion,
};

type typeStoryObj = StoryObj<typeof Accordion>;

export default meta;

export const Default: typeStoryObj = {
    args: {
        $items: [
            {title: "Accordion 1", content: "Content 1"},
            {title: "Accordion 2", content: "Content 2"},
            {title: "Accordion 3", content: "Content 3"},
        ],
    },
}