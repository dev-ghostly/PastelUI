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
            {title: "Accordion 1", content: "Lorem quis irure irure aliquip eiusmod enim consequat in commodo exercitation incididunt enim velit. Proident amet velit enim aute eu duis velit. In aliquip sit Lorem exercitation cupidatat minim ut. Cupidatat aute quis labore elit cupidatat nisi et culpa exercitation fugiat. Nulla ipsum minim aute est velit proident reprehenderit laboris adipisicing ullamco et. Culpa adipisicing labore minim qui amet anim aute consectetur ea. Labore consectetur aute mollit quis veniam ullamco nulla reprehenderit id qui reprehenderit ullamco sit occaecat."},
            {title: "Accordion 2", content: "Lorem quis irure irure aliquip eiusmod enim consequat in commodo exercitation incididunt enim velit. Proident amet velit enim aute eu duis velit. In aliquip sit Lorem exercitation cupidatat minim ut. Cupidatat aute quis labore elit cupidatat nisi et culpa exercitation fugiat. Nulla ipsum minim aute est velit proident reprehenderit laboris adipisicing ullamco et. Culpa adipisicing labore minim qui amet anim aute consectetur ea. Labore consectetur aute mollit quis veniam ullamco nulla reprehenderit id qui reprehenderit ullamco sit occaecat."},
            {title: "Accordion 3", content: "Lorem quis irure irure aliquip eiusmod enim consequat in commodo exercitation incididunt enim velit. Proident amet velit enim aute eu duis velit. In aliquip sit Lorem exercitation cupidatat minim ut. Cupidatat aute quis labore elit cupidatat nisi et culpa exercitation fugiat. Nulla ipsum minim aute est velit proident reprehenderit laboris adipisicing ullamco et. Culpa adipisicing labore minim qui amet anim aute consectetur ea. Labore consectetur aute mollit quis veniam ullamco nulla reprehenderit id qui reprehenderit ullamco sit occaecat."},
        ],
    },
}

