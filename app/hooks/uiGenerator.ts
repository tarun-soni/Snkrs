import React from "react"
import { Text } from "react-native"

const ComponentFactory: Record<string, any> = {
  textField: require("../components/TextField"),
  text: require("../components/Text"),

  // button: require("../components/Button"),
  // listView: require("../components/ListView"),
  // listItem: require("../components/ListItem"),
  // screen: require("../components/Screen"),
  // card: require("../components/Card"),
  // header: require("../components/Header"),
  // toggle: require("../components/Toggle"),
  // emptyState: require("../components/EmptyState"),
  // autoImage: require("../components/AutoImage"),
}

export type Block = {
  type: string
  data: Block[] | any
}

export const renderComponent = (block: Block, props = {}) => {
  const getComponent = ComponentFactory[block.type]
  if (getComponent) {
    return React.createElement(getComponent, { ...props, data: block.data })
  }
  return React.createElement(
    Text as any,
    { ...props },
    `The component ${block.type} has not been created yet.`,
  )
}
