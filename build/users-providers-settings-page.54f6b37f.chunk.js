"use strict";
(self["webpackChunkstrapi_elearning"] = self["webpackChunkstrapi_elearning"] || []).push([[2282],{

/***/ 1431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ProvidersPage: () => (/* binding */ ProvidersPage),
  "default": () => (/* binding */ Providers)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(71590);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(40720);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(90731);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(34726);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.mjs
var Table = __webpack_require__(5923);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.mjs
var Thead = __webpack_require__(3547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(29299);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(69398);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs
var Typography = __webpack_require__(71068);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(22304);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(35752);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(96208);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 16 modules
var dist = __webpack_require__(79263);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(2382);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(74622);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(36854);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(71543);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(96987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(31988);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(6498);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(37022);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(12473);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Breadcrumbs.mjs + 1 modules
var Breadcrumbs = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Crumb.mjs
var Crumb = __webpack_require__(75071);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.mjs
var ToggleInput = __webpack_require__(17705);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(38670);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/Input/index.js




const Input = ({
  description,
  disabled,
  intlLabel,
  error,
  name,
  onChange,
  placeholder,
  providerToEditName,
  type,
  value
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const inputValue = name === "noName" ? `${window.strapi.backendURL}/api/connect/${providerToEditName}/callback` : value;
  const label = formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { provider: providerToEditName, ...intlLabel.values }
  );
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { provider: providerToEditName, ...description.values }
  ) : "";
  if (type === "bool") {
    return /* @__PURE__ */ react.createElement(
      ToggleInput/* ToggleInput */.s,
      {
        "aria-label": name,
        checked: value,
        disabled,
        hint,
        label,
        name,
        offLabel: formatMessage({
          id: "app.components.ToggleCheckbox.off-label",
          defaultMessage: "Off"
        }),
        onLabel: formatMessage({
          id: "app.components.ToggleCheckbox.on-label",
          defaultMessage: "On"
        }),
        onChange: (e) => {
          onChange({ target: { name, value: e.target.checked } });
        }
      }
    );
  }
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    { ...placeholder.values }
  ) : "";
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      "aria-label": name,
      disabled,
      error: errorMessage,
      label,
      name,
      onChange,
      placeholder: formattedPlaceholder,
      type,
      value: inputValue
    }
  );
};
Input.defaultProps = {
  description: null,
  disabled: false,
  error: "",
  placeholder: null,
  value: ""
};
Input.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  providerToEditName: (prop_types_default()).string.isRequired,
  type: (prop_types_default()).string.isRequired,
  value: prop_types_default().oneOfType([(prop_types_default()).bool, (prop_types_default()).string])
};
/* harmony default export */ const FormModal_Input = (Input);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/index.js








const FormModal = ({
  headerBreadcrumbs,
  initialData,
  isSubmiting,
  layout,
  isOpen,
  onSubmit,
  onToggle,
  providerToEditName
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: onToggle, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.O, { label: headerBreadcrumbs.join(", ") }, headerBreadcrumbs.map((crumb, index, arr) => /* @__PURE__ */ react.createElement(Crumb/* Crumb */.$, { isCurrent: index === arr.length - 1, key: crumb }, crumb)))), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      onSubmit: (values) => onSubmit(values),
      initialValues: initialData,
      validationSchema: layout.schema,
      validateOnChange: false
    },
    ({ errors, handleChange, values }) => {
      return /* @__PURE__ */ react.createElement(dist.Form, null, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, layout.form.map((row) => {
        return row.map((input) => {
          return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: input.name, col: input.size, xs: 12 }, /* @__PURE__ */ react.createElement(
            FormModal_Input,
            {
              ...input,
              error: errors[input.name],
              onChange: handleChange,
              value: values[input.name],
              providerToEditName
            }
          ));
        });
      })))), /* @__PURE__ */ react.createElement(
        ModalFooter/* ModalFooter */.m,
        {
          startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onToggle, type: "button" }, formatMessage({
            id: "app.components.Button.cancel",
            defaultMessage: "Cancel"
          })),
          endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", loading: isSubmiting }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
        }
      ));
    }
  ));
};
FormModal.defaultProps = {
  initialData: null,
  providerToEditName: null
};
FormModal.propTypes = {
  headerBreadcrumbs: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  initialData: (prop_types_default()).object,
  layout: prop_types_default().shape({
    form: prop_types_default().arrayOf((prop_types_default()).array),
    schema: (prop_types_default()).object
  }).isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  isSubmiting: (prop_types_default()).bool.isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired,
  providerToEditName: (prop_types_default()).string
};
/* harmony default export */ const components_FormModal = (FormModal);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/constants.js
var constants = __webpack_require__(84419);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(99688);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/forms.js



const callbackLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.redirectURL.front-end.label"),
  defaultMessage: "The redirect URL to your front-end app"
};
const callbackPlaceholder = {
  id: "http://www.client-app.com",
  defaultMessage: "http://www.client-app.com"
};
const enabledDescription = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.enabled.description"),
  defaultMessage: "If disabled, users won't be able to use this provider."
};
const enabledLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.enabled.label"),
  defaultMessage: "Enable"
};
const keyLabel = { id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.key.label"), defaultMessage: "Client ID" };
const hintLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.redirectURL.label"),
  defaultMessage: "The redirect URL to add in your {provider} application configurations"
};
const textPlaceholder = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.key.placeholder"),
  defaultMessage: "TEXT"
};
const secretLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.secret.label"),
  defaultMessage: "Client Secret"
};
const forms_forms = {
  email: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6
          // TODO check if still needed
          // validations: {
          //   required: true,
          // },
        }
      ]
    ],
    schema: yup_es/* object */.Ry().shape({
      enabled: yup_es/* bool */.Xg().required(dist.translatedErrors.required)
    })
  },
  providers: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: keyLabel,
          name: "key",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: secretLabel,
          name: "secret",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: callbackLabel,
          placeholder: callbackPlaceholder,
          name: "callback",
          type: "text",
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: hintLabel,
          name: "noName",
          type: "text",
          validations: {},
          size: 12,
          disabled: true
        }
      ]
    ],
    schema: yup_es/* object */.Ry().shape({
      enabled: yup_es/* bool */.Xg().required(dist.translatedErrors.required),
      key: yup_es/* string */.Z_().when("enabled", {
        is: true,
        then: yup_es/* string */.Z_().required(dist.translatedErrors.required),
        otherwise: yup_es/* string */.Z_()
      }),
      secret: yup_es/* string */.Z_().when("enabled", {
        is: true,
        then: yup_es/* string */.Z_().required(dist.translatedErrors.required),
        otherwise: yup_es/* string */.Z_()
      }),
      callback: yup_es/* string */.Z_().when("enabled", {
        is: true,
        then: yup_es/* string */.Z_().required(dist.translatedErrors.required),
        otherwise: yup_es/* string */.Z_()
      })
    })
  },
  providersWithSubdomain: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: keyLabel,
          name: "key",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: secretLabel,
          name: "secret",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: {
            id: (0,utils/* getTrad */.OB)({ id: "PopUpForm.Providers.jwksurl.label" }),
            defaultMessage: "JWKS URL"
          },
          name: "jwksurl",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: false
          }
        }
      ],
      [
        {
          intlLabel: {
            id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.subdomain.label"),
            defaultMessage: "Host URI (Subdomain)"
          },
          name: "subdomain",
          type: "text",
          placeholder: {
            id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.subdomain.placeholder"),
            defaultMessage: "my.subdomain.com"
          },
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: callbackLabel,
          placeholder: callbackPlaceholder,
          name: "callback",
          type: "text",
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: hintLabel,
          name: "noName",
          type: "text",
          validations: {},
          size: 12,
          disabled: true
        }
      ]
    ],
    schema: yup_es/* object */.Ry().shape({
      enabled: yup_es/* bool */.Xg().required(dist.translatedErrors.required),
      key: yup_es/* string */.Z_().when("enabled", {
        is: true,
        then: yup_es/* string */.Z_().required(dist.translatedErrors.required),
        otherwise: yup_es/* string */.Z_()
      }),
      secret: yup_es/* string */.Z_().when("enabled", {
        is: true,
        then: yup_es/* string */.Z_().required(dist.translatedErrors.required),
        otherwise: yup_es/* string */.Z_()
      }),
      subdomain: yup_es/* string */.Z_().when("enabled", {
        is: true,
        then: yup_es/* string */.Z_().required(dist.translatedErrors.required),
        otherwise: yup_es/* string */.Z_()
      }),
      callback: yup_es/* string */.Z_().when("enabled", {
        is: true,
        then: yup_es/* string */.Z_().required(dist.translatedErrors.required),
        otherwise: yup_es/* string */.Z_()
      })
    })
  }
};
/* harmony default export */ const utils_forms = (forms_forms);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/index.js











const ProvidersPage = () => {
  const { formatMessage, locale } = (0,useIntl/* default */.Z)();
  const queryClient = (0,es.useQueryClient)();
  const { trackUsage } = (0,dist.useTracking)();
  const [isOpen, setIsOpen] = react.useState(false);
  const [providerToEditName, setProviderToEditName] = react.useState(null);
  const toggleNotification = (0,dist.useNotification)();
  const { lockApp, unlockApp } = (0,dist.useOverlayBlocker)();
  const { get, put } = (0,dist.useFetchClient)();
  const { formatAPIError } = (0,dist.useAPIErrorHandler)();
  const formatter = (0,dist.useCollator)(locale, {
    sensitivity: "base"
  });
  (0,dist.useFocusWhenNavigate)();
  const {
    isLoading: isLoadingPermissions,
    allowedActions: { canUpdate }
  } = (0,dist.useRBAC)({ update: constants/* PERMISSIONS */._.updateProviders });
  const { isLoading: isLoadingData, data } = (0,es.useQuery)(
    ["users-permissions", "get-providers"],
    async () => {
      const { data: data2 } = await get("/users-permissions/providers");
      return data2;
    },
    {
      initialData: {}
    }
  );
  const submitMutation = (0,es.useMutation)((body) => put("/users-permissions/providers", body), {
    async onSuccess() {
      await queryClient.invalidateQueries(["users-permissions", "providers"]);
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.OB)("notification.success.submit") }
      });
      trackUsage("didEditAuthenticationProvider");
      handleToggleModal();
      unlockApp();
    },
    onError(error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
      unlockApp();
    },
    refetchActive: false
  });
  const providers = Object.entries(data).reduce((acc, [name, provider]) => {
    const { icon, enabled, subdomain } = provider;
    acc.push({
      name,
      icon: icon === "envelope" ? ["fas", "envelope"] : ["fab", icon],
      enabled,
      subdomain
    });
    return acc;
  }, []).sort((a, b) => formatter.compare(a.name, b.name));
  const isLoading = isLoadingData || isLoadingPermissions;
  const isProviderWithSubdomain = react.useMemo(() => {
    if (!providerToEditName) {
      return false;
    }
    const providerToEdit = providers.find((obj) => obj.name === providerToEditName);
    return !!providerToEdit?.subdomain;
  }, [providers, providerToEditName]);
  const layoutToRender = react.useMemo(() => {
    if (providerToEditName === "email") {
      return utils_forms.email;
    }
    if (isProviderWithSubdomain) {
      return utils_forms.providersWithSubdomain;
    }
    return utils_forms.providers;
  }, [providerToEditName, isProviderWithSubdomain]);
  const handleToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClickEdit = (provider) => {
    if (canUpdate) {
      setProviderToEditName(provider.name);
      handleToggleModal();
    }
  };
  const handleSubmit = async (values) => {
    lockApp();
    trackUsage("willEditAuthenticationProvider");
    submitMutation.mutate({ providers: { ...data, [providerToEditName]: values } });
  };
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(
    dist.SettingsPageTitle,
    {
      name: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.providers"),
        defaultMessage: "Providers"
      })
    }
  ), /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.providers"),
        defaultMessage: "Providers"
      })
    }
  ), isLoading ? /* @__PURE__ */ react.createElement(dist.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 3, rowCount: providers.length + 1 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.OB)("Providers.status"), defaultMessage: "Status" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  })))))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, providers.map((provider) => /* @__PURE__ */ react.createElement(
    Tr.Tr,
    {
      key: provider.name,
      ...(0,dist.onRowClick)({
        fn: () => handleClickEdit(provider),
        condition: canUpdate
      })
    },
    /* @__PURE__ */ react.createElement(Cell.Td, { width: "45%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "semiBold", textColor: "neutral800" }, provider.name)),
    /* @__PURE__ */ react.createElement(Cell.Td, { width: "65%" }, /* @__PURE__ */ react.createElement(
      Typography/* Typography */.Z,
      {
        textColor: provider.enabled ? "success600" : "danger600",
        "data-testid": `enable-${provider.name}`
      },
      provider.enabled ? formatMessage({
        id: "global.enabled",
        defaultMessage: "Enabled"
      }) : formatMessage({
        id: "global.disabled",
        defaultMessage: "Disabled"
      })
    )),
    /* @__PURE__ */ react.createElement(Cell.Td, { ...dist.stopPropagation }, canUpdate && /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: () => handleClickEdit(provider),
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
        label: "Edit"
      }
    ))
  )))))), /* @__PURE__ */ react.createElement(
    components_FormModal,
    {
      initialData: data[providerToEditName],
      isOpen,
      isSubmiting: submitMutation.isLoading,
      layout: layoutToRender,
      headerBreadcrumbs: [
        formatMessage({
          id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.providers"),
          defaultMessage: "Edit Provider"
        }),
        upperFirst_default()(providerToEditName)
      ],
      onToggle: handleToggleModal,
      onSubmit: handleSubmit,
      providerToEditName
    }
  ));
};
const ProtectedProvidersPage = () => /* @__PURE__ */ react.createElement(dist.CheckPagePermissions, { permissions: constants/* PERMISSIONS */._.readProviders }, /* @__PURE__ */ react.createElement(ProvidersPage, null));
/* harmony default export */ const Providers = (ProtectedProvidersPage);


/***/ }),

/***/ 99688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YX: () => (/* reexport */ utils_cleanPermissions),
  OB: () => (/* reexport */ getTrad/* default */.Z)
});

// UNUSED EXPORTS: formatPolicies

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/cleanPermissions.js

const cleanPermissions = (permissions) => Object.keys(permissions).reduce((acc, current) => {
  const currentPermission = permissions[current].controllers;
  const cleanedControllers = Object.keys(currentPermission).reduce((acc2, curr) => {
    if (isEmpty_default()(currentPermission[curr])) {
      return acc2;
    }
    acc2[curr] = currentPermission[curr];
    return acc2;
  }, {});
  if (isEmpty_default()(cleanedControllers)) {
    return acc;
  }
  acc[current] = { controllers: cleanedControllers };
  return acc;
}, {});
/* harmony default export */ const utils_cleanPermissions = (cleanPermissions);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js + 1 modules
var getTrad = __webpack_require__(58655);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js





/***/ })

}]);