import { ArrowRightLeftIcon, BoxIcon, FigmaIcon, HomeIcon, PaletteIcon, WindIcon } from "../../../components/icons/icon";

export const navigation = [
    {
      name: "Getting Started",
      icon: HomeIcon,
      items: [
        { name: "Installation", path: "/ui" },
        { name: "Configuration", path: "/ui/configuration" },
        { name: "Playground", path: "/getting-started/playground" },
      ]
    },
    {
      name: "Components",
      icon: BoxIcon,
      sections: [
        {
          title: "Form",
          items: [
            { name: "AutoComplete", path: "/components/form/autocomplete" },
            { name: "Calendar", path: "/components/form/calendar" },
            { name: "CascadeSelect", path: "/components/form/cascadeselect" },
            { name: "Checkbox", path: "/components/form/checkbox" },
            { name: "Chips", path: "/components/form/chips" },
            { name: "ColorPicker", path: "/components/form/colorpicker" },
            { name: "Dropdown", path: "/components/form/dropdown" },
            { name: "Editor", path: "/components/form/editor" },
            { name: "FloatLabel", path: "/components/form/floatlabel" },
            { name: "IconField", path: "/components/form/iconfield" },
            { name: "InputGroup", path: "/components/form/inputgroup" },
            { name: "InputMask", path: "/components/form/inputmask" },
            { name: "InputSwitch", path: "/components/form/inputswitch" },
            { name: "InputNumber", path: "/components/form/inputnumber" },
            { name: "InputOtp", path: "/components/form/inputotp" },
            { name: "InputText", path: "/components/form/inputtext" },
            { name: "InputTextarea", path: "/components/form/inputtextarea" },
            { name: "KeyFilter", path: "/components/form/keyfilter" },
            { name: "Knob", path: "/components/form/knob" }
          ]
        },
        {
          title: "Button",
          items: [
            { name: "Button", path: "/ui/buttons" },
            { name: "SpeedDial", path: "/components/button/speeddial" },
            { name: "SplitButton", path: "/components/button/splitbutton" },
            { name: "ToggleButton", path: "/components/button/togglebutton" }
          ]
        },
        {
          title: "Data",
          items: [
            { name: "DataTable", path: "/components/data/datatable" },
            { name: "DataView", path: "/components/data/dataview" },
            { name: "PickList", path: "/components/data/picklist" },
            { name: "TreeTable", path: "/components/data/treetable" }
          ]
        }
      ]
    },
    {
      name: "Theming",
      icon: PaletteIcon,
      items: [
        { name: "Theme Overview", path: "/theming/overview" },
        { name: "Custom Themes", path: "/theming/custom" }
      ]
    },
    {
      name: "Pass Through",
      icon: ArrowRightLeftIcon,
      items: [
        { name: "API", path: "/pass-through/api" },
        { name: "Usage", path: "/pass-through/usage" }
      ]
    },
    {
      name: "Tailwind",
      icon: WindIcon,
      items: [
        { name: "Configuration", path: "/ui/install-tailwind" },
      ],
    },
    {
      name: "Figma UI Kit",
      icon: FigmaIcon,
      badge: "NEW",
      items: [
        { name: "Figma Files", path: "/figma-ui-kit/files" }
      ]
    }
  ];
  

