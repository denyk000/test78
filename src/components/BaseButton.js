import { h } from "vue";
export default function BaseButton(props, { slots }) {
  const type = props.link ? "a" : "button";
  const btnProps = { role: "button", class: "btn" };
  props.link && (btnProps.href = props.link);
  return h(type, btnProps, slots.default());
}
