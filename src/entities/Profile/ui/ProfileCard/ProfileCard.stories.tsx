import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProfileCard } from "entities/Profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: "admin",
    age: 30,
    country: Country.Ukraine,
    lastname: "admin",
    first: "asd",
    city: "asf",
    currency: Currency.USD,
    avatar: "https://cdn-icons-png.flaticon.com/512/1/1819.png",
  },
};

export const withError = Template.bind({});
withError.args = {
  error: "true",
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
