import Card from "../Components/Card";
import type {Meta, StoryObj} from "@storybook/react";

const meta: Meta = {
    title: "Card",
    component: Card,
};

type typeStoryObj = StoryObj<typeof Card>;

export default meta;

export const Product: typeStoryObj = {
    args: {
        $title: "Product",
        $description: "Description of the product",
        $price: "$20.00",
        $button1Text: "Coucou",
        $button1OnClick: (e : any) => console.log(e.target),
        $image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
}