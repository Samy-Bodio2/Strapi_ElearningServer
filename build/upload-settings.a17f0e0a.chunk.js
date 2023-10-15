"use strict";
(self["webpackChunkstrapi_elearning"] = self["webpackChunkstrapi_elearning"] || []).push([[695],{

/***/ 56752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SettingsPage: () => (/* binding */ SettingsPage),
  "default": () => (/* binding */ pages_SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(40720);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(90731);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(12473);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(34726);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(71590);
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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.mjs
var ToggleInput = __webpack_require__(17705);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 16 modules
var dist = __webpack_require__(79263);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(18226);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(64593);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/constants.js
var constants = __webpack_require__(11727);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(63955);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/init.js
const init = (initialState) => {
  return initialState;
};
/* harmony default export */ const SettingsPage_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/reducer.js


const initialState = {
  initialData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  },
  modifiedData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  }
};
const reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm/* default */.ZP)(state, (drafState) => {
    switch (action.type) {
      case "GET_DATA_SUCCEEDED": {
        drafState.initialData = action.data;
        drafState.modifiedData = action.data;
        break;
      }
      case "ON_CHANGE": {
        set_default()(drafState, ["modifiedData", ...action.keys.split(".")], action.value);
        break;
      }
      default:
        return state;
    }
  })
);
/* harmony default export */ const SettingsPage_reducer = (reducer);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/index.js












const SettingsPage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { lockApp, unlockApp } = (0,dist.useOverlayBlocker)();
  const toggleNotification = (0,dist.useNotification)();
  const { get, put } = (0,dist.useFetchClient)();
  (0,dist.useFocusWhenNavigate)();
  const [{ initialData, modifiedData }, dispatch] = (0,react.useReducer)(SettingsPage_reducer, initialState, SettingsPage_init);
  const { data, isLoading, refetch } = (0,es.useQuery)({
    queryKey: ["upload", "settings"],
    async queryFn() {
      const {
        data: { data: data2 }
      } = await get("/upload/settings");
      return data2;
    }
  });
  react.useEffect(() => {
    if (data) {
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        data
      });
    }
  }, [data]);
  const isSaveButtonDisabled = isEqual_default()(initialData, modifiedData);
  const { mutateAsync, isLoading: isSubmiting } = (0,es.useMutation)({
    async mutationFn(body) {
      return put("/upload/settings", body);
    },
    onSuccess() {
      refetch();
      toggleNotification({
        type: "success",
        message: { id: "notification.form.success.fields" }
      });
    },
    onError(err) {
      console.error(err);
    }
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSaveButtonDisabled) {
      return;
    }
    lockApp();
    await mutateAsync(modifiedData);
    unlockApp();
  };
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name,
      value
    });
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    Helmet/* Helmet */.q,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("page.title"),
        defaultMessage: "Settings - Media Libray"
      })
    }
  ), /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.header.label"),
        defaultMessage: "Media Library"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          disabled: isSaveButtonDisabled,
          loading: isSubmiting,
          type: "submit",
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          size: "S"
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      ),
      subtitle: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.sub-header.label"),
        defaultMessage: "Configure the settings for the Media Library"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, isLoading ? /* @__PURE__ */ react.createElement(dist.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("settings.blockTitle"),
    defaultMessage: "Asset management"
  }))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 6 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "responsiveDimensions",
      checked: modifiedData.responsiveDimensions,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.responsiveDimensions.description"),
        defaultMessage: "Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.responsiveDimensions.label"),
        defaultMessage: "Responsive friendly upload"
      }),
      name: "responsiveDimensions",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "responsiveDimensions", value: e.target.checked }
        });
      }
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "sizeOptimization",
      checked: modifiedData.sizeOptimization,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.sizeOptimization.description"),
        defaultMessage: "Enabling this option will reduce the image size and slightly reduce its quality."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.sizeOptimization.label"),
        defaultMessage: "Size optimization"
      }),
      name: "sizeOptimization",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "sizeOptimization", value: e.target.checked }
        });
      }
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "autoOrientation",
      checked: modifiedData.autoOrientation,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.autoOrientation.description"),
        defaultMessage: "Enabling this option will automatically rotate the image according to EXIF orientation tag."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.autoOrientation.label"),
        defaultMessage: "Auto orientation"
      }),
      name: "autoOrientation",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "autoOrientation", value: e.target.checked }
        });
      }
    }
  ))))))))));
};
const ProtectedSettingsPage = () => /* @__PURE__ */ react.createElement(dist.CheckPagePermissions, { permissions: constants/* PERMISSIONS */._I.settings }, /* @__PURE__ */ react.createElement(SettingsPage, null));
/* harmony default export */ const pages_SettingsPage = (ProtectedSettingsPage);


/***/ })

}]);