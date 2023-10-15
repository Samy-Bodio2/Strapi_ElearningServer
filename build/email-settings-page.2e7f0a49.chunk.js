"use strict";
(self["webpackChunkstrapi_elearning"] = self["webpackChunkstrapi_elearning"] || []).push([[1495],{

/***/ 91043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(40720);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(90731);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(34726);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(96987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(16607);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs
var Typography = __webpack_require__(71068);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(31988);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(6498);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(38670);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.mjs
var Select = __webpack_require__(59586);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.mjs
var Option = __webpack_require__(40933);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(12473);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 16 modules
var dist = __webpack_require__(79263);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Envelop.mjs
var Envelop = __webpack_require__(24116);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(88972);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-email/admin/src/constants.js
var constants = __webpack_require__(31350);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/utils/schema.js


const schema = yup_es/* object */.Ry().shape({
  email: yup_es/* string */.Z_().email(dist.translatedErrors.email).required(dist.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/index.js









const DocumentationLink = styled_components_browser_esm["default"].a`
  color: ${({ theme }) => theme.colors.primary600};
`;
const ProtectedSettingsPage = () => /* @__PURE__ */ react.createElement(dist.CheckPagePermissions, { permissions: constants/* PERMISSIONS */._.settings }, /* @__PURE__ */ react.createElement(SettingsPage, null));
const SettingsPage = () => {
  const toggleNotification = (0,dist.useNotification)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { lockApp, unlockApp } = (0,dist.useOverlayBlocker)();
  const { get, post } = (0,dist.useFetchClient)();
  const { data, isLoading } = (0,es.useQuery)(["email", "settings"], async () => {
    const {
      data: { config }
    } = await get("/email/settings");
    return config;
  });
  const mutation = (0,es.useMutation)(
    (body) => post("/email/test", body),
    {
      onError() {
        toggleNotification({
          type: "warning",
          message: formatMessage(
            {
              id: "email.Settings.email.plugin.notification.test.error",
              defaultMessage: "Failed to send a test mail to {to}"
            },
            { to: testAddress }
          )
        });
      },
      onSuccess() {
        toggleNotification({
          type: "success",
          message: formatMessage(
            {
              id: "email.Settings.email.plugin.notification.test.success",
              defaultMessage: "Email test succeeded, check the {to} mailbox"
            },
            { to: testAddress }
          )
        });
      }
    },
    {
      retry: false
    }
  );
  (0,dist.useFocusWhenNavigate)();
  const [formErrors, setFormErrors] = react.useState({});
  const [testAddress, setTestAddress] = react.useState("");
  const [isTestAddressValid, setIsTestAddressValid] = react.useState(false);
  react.useEffect(() => {
    utils_schema.validate({ email: testAddress }, { abortEarly: false }).then(() => setIsTestAddressValid(true)).catch(() => setIsTestAddressValid(false));
  }, [testAddress]);
  const handleChange = (e) => {
    setTestAddress(() => e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await utils_schema.validate({ email: testAddress }, { abortEarly: false });
    } catch (error) {
      setFormErrors((0,dist.getYupInnerErrors)(error));
    }
    lockApp();
    mutation.mutate({ to: testAddress });
    unlockApp();
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { labelledBy: "title", "aria-busy": isLoading || mutation.isLoading }, /* @__PURE__ */ react.createElement(
    dist.SettingsPageTitle,
    {
      name: formatMessage({
        id: "email.Settings.email.plugin.title",
        defaultMessage: "Configuration"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      id: "title",
      title: formatMessage({
        id: "email.Settings.email.plugin.title",
        defaultMessage: "Configuration"
      }),
      subtitle: formatMessage({
        id: "email.Settings.email.plugin.subTitle",
        defaultMessage: "Test the settings for the Email plugin"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, isLoading ? /* @__PURE__ */ react.createElement(dist.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 7 }, /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
      id: "email.Settings.email.plugin.title.config",
      defaultMessage: "Configuration"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage(
      {
        id: "email.Settings.email.plugin.text.configuration",
        defaultMessage: "The plugin is configured through the {file} file, checkout this {link} for the documentation."
      },
      {
        file: "./config/plugins.js",
        link: /* @__PURE__ */ react.createElement(
          DocumentationLink,
          {
            href: "https://docs.strapi.io/developer-docs/latest/plugins/email.html",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          formatMessage({
            id: "email.link",
            defaultMessage: "Link"
          })
        )
      }
    ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "shipper-email",
        label: formatMessage({
          id: "email.Settings.email.plugin.label.defaultFrom",
          defaultMessage: "Default sender email"
        }),
        placeholder: formatMessage({
          id: "email.Settings.email.plugin.placeholder.defaultFrom",
          defaultMessage: "ex: Strapi No-Reply '<'no-reply@strapi.io'>'"
        }),
        disabled: true,
        onChange: () => {
        },
        value: data.settings.defaultFrom
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "response-email",
        label: formatMessage({
          id: "email.Settings.email.plugin.label.defaultReplyTo",
          defaultMessage: "Default response email"
        }),
        placeholder: formatMessage({
          id: "email.Settings.email.plugin.placeholder.defaultReplyTo",
          defaultMessage: `ex: Strapi '<'example@strapi.io'>'`
        }),
        disabled: true,
        onChange: () => {
        },
        value: data.settings.defaultReplyTo
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      Select/* Select */.P,
      {
        name: "email-provider",
        label: formatMessage({
          id: "email.Settings.email.plugin.label.provider",
          defaultMessage: "Email provider"
        }),
        disabled: true,
        onChange: () => {
        },
        value: data.provider
      },
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: data.provider }, data.provider)
    ))))
  ), /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      alignItems: "stretch",
      background: "neutral0",
      direction: "column",
      gap: 4,
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
      id: "email.Settings.email.plugin.title.test",
      defaultMessage: "Test email delivery"
    })),
    /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5, alignItems: "end" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        id: "test-address-input",
        name: "test-address",
        onChange: handleChange,
        label: formatMessage({
          id: "email.Settings.email.plugin.label.testAddress",
          defaultMessage: "Recipient email"
        }),
        value: testAddress,
        error: formErrors.email?.id && formatMessage({
          id: `email.${formErrors.email?.id}`,
          defaultMessage: "This is an invalid email"
        }),
        placeholder: formatMessage({
          id: "email.Settings.email.plugin.placeholder.testAddress",
          defaultMessage: "ex: developer@example.com"
        })
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 7, s: 12 }, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        loading: mutation.isLoading,
        disabled: !isTestAddressValid,
        type: "submit",
        startIcon: /* @__PURE__ */ react.createElement(Envelop/* default */.Z, null)
      },
      formatMessage({
        id: "email.Settings.email.plugin.button.test-email",
        defaultMessage: "Send test email"
      })
    )))
  )))));
};
/* harmony default export */ const Settings = (ProtectedSettingsPage);


/***/ })

}]);