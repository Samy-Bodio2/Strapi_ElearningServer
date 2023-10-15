"use strict";
(self["webpackChunkstrapi_elearning"] = self["webpackChunkstrapi_elearning"] || []).push([[8418],{

/***/ 38977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EmailTemplates)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(334);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(40720);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(90731);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(34726);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 16 modules
var dist = __webpack_require__(79263);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/constants.js
var constants = __webpack_require__(84419);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(99688);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(74622);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(36854);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(71543);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(31988);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(6498);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.mjs
var Textarea = __webpack_require__(457);
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
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/schema.js


const schema = yup_es/* object */.Ry().shape({
  options: yup_es/* object */.Ry().shape({
    from: yup_es/* object */.Ry().shape({
      name: yup_es/* string */.Z_().required(dist.translatedErrors.required),
      email: yup_es/* string */.Z_().email(dist.translatedErrors.email).required(dist.translatedErrors.required)
    }).required(),
    response_email: yup_es/* string */.Z_().email(dist.translatedErrors.email),
    object: yup_es/* string */.Z_().required(dist.translatedErrors.required),
    message: yup_es/* string */.Z_().required(dist.translatedErrors.required)
  }).required(dist.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailForm.js









const EmailForm = ({ template, onToggle, onSubmit }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(
    ModalLayout/* ModalLayout */.P,
    {
      onClose: onToggle,
      labelledBy: `${formatMessage({
        id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
        defaultMessage: "Edit email template"
      })}, ${formatMessage({ id: (0,utils/* getTrad */.OB)(template.display), defaultMessage: template.display })}`
    },
    /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(
      Breadcrumbs/* Breadcrumbs */.O,
      {
        label: `${formatMessage({
          id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
          defaultMessage: "Edit email template"
        })}, ${formatMessage({
          id: (0,utils/* getTrad */.OB)(template.display),
          defaultMessage: template.display
        })}`
      },
      /* @__PURE__ */ react.createElement(Crumb/* Crumb */.$, null, formatMessage({
        id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
        defaultMessage: "Edit email template"
      })),
      /* @__PURE__ */ react.createElement(Crumb/* Crumb */.$, { isCurrent: true }, formatMessage({ id: (0,utils/* getTrad */.OB)(template.display), defaultMessage: template.display }))
    )),
    /* @__PURE__ */ react.createElement(
      formik_esm/* Formik */.J9,
      {
        onSubmit,
        initialValues: template,
        validateOnChange: false,
        validationSchema: utils_schema,
        enableReinitialize: true
      },
      ({ errors, values, handleChange, isSubmitting }) => {
        return /* @__PURE__ */ react.createElement(dist.Form, null, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          dist.GenericInput,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.from.name.label"),
              defaultMessage: "Shipper name"
            },
            name: "options.from.name",
            onChange: handleChange,
            value: values.options.from.name,
            error: errors?.options?.from?.name,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          dist.GenericInput,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.from.email.label"),
              defaultMessage: "Shipper email"
            },
            name: "options.from.email",
            onChange: handleChange,
            value: values.options.from.email,
            error: errors?.options?.from?.email,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          dist.GenericInput,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.response_email.label"),
              defaultMessage: "Response email"
            },
            name: "options.response_email",
            onChange: handleChange,
            value: values.options.response_email,
            error: errors?.options?.response_email,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          dist.GenericInput,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.object.label"),
              defaultMessage: "Subject"
            },
            name: "options.object",
            onChange: handleChange,
            value: values.options.object,
            error: errors?.options?.object,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 12, s: 12 }, /* @__PURE__ */ react.createElement(
          Textarea/* Textarea */.g,
          {
            label: formatMessage({
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.message.label"),
              defaultMessage: "Message"
            }),
            id: "options.message",
            onChange: handleChange,
            value: values.options.message,
            error: errors?.options?.message && formatMessage({
              id: errors.options.message,
              defaultMessage: errors.options.message
            })
          }
        )))), /* @__PURE__ */ react.createElement(
          ModalFooter/* ModalFooter */.m,
          {
            startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onToggle, variant: "tertiary" }, "Cancel"),
            endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { loading: isSubmitting, type: "submit" }, "Finish")
          }
        ));
      }
    )
  );
};
EmailForm.propTypes = {
  template: prop_types_default().shape({
    display: (prop_types_default()).string,
    icon: (prop_types_default()).string,
    options: prop_types_default().shape({
      from: prop_types_default().shape({
        name: (prop_types_default()).string,
        email: (prop_types_default()).string
      }),
      message: (prop_types_default()).string,
      object: (prop_types_default()).string,
      response_email: (prop_types_default()).string
    })
  }).isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_EmailForm = (EmailForm);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.mjs
var Table = __webpack_require__(5923);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.mjs
var Thead = __webpack_require__(3547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(29299);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(69398);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(22304);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs
var Typography = __webpack_require__(71068);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(35752);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(85200);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(96208);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.mjs
var Refresh = __webpack_require__(75975);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(2382);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(18226);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailTable.js







const EmailTable = ({ canUpdate, onEditClick }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 3, rowCount: 3 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, { width: "1%" }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.icon.label"),
    defaultMessage: "icon"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.name.label"),
    defaultMessage: "name"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, { width: "1%" }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.action.label"),
    defaultMessage: "action"
  }))))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, /* @__PURE__ */ react.createElement(Tr.Tr, { ...(0,dist.onRowClick)({ fn: () => onEditClick("reset_password") }) }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, null, /* @__PURE__ */ react.createElement(
    Refresh/* default */.Z,
    {
      "aria-label": formatMessage({
        id: "global.reset-password",
        defaultMessage: "Reset password"
      })
    }
  ))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: "global.reset-password",
    defaultMessage: "Reset password"
  }))), /* @__PURE__ */ react.createElement(Cell.Td, { ...dist.stopPropagation }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => onEditClick("reset_password"),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("Email.template.form.edit.label"),
        defaultMessage: "Edit a template"
      }),
      noBorder: true,
      icon: canUpdate && /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
    }
  ))), /* @__PURE__ */ react.createElement(Tr.Tr, { ...(0,dist.onRowClick)({ fn: () => onEditClick("email_confirmation") }) }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, null, /* @__PURE__ */ react.createElement(
    Check/* default */.Z,
    {
      "aria-label": formatMessage({
        id: (0,utils/* getTrad */.OB)("Email.template.email_confirmation"),
        defaultMessage: "Email address confirmation"
      })
    }
  ))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.email_confirmation"),
    defaultMessage: "Email address confirmation"
  }))), /* @__PURE__ */ react.createElement(Cell.Td, { ...dist.stopPropagation }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => onEditClick("email_confirmation"),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("Email.template.form.edit.label"),
        defaultMessage: "Edit a template"
      }),
      noBorder: true,
      icon: canUpdate && /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
    }
  )))));
};
EmailTable.propTypes = {
  canUpdate: (prop_types_default()).bool.isRequired,
  onEditClick: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_EmailTable = (EmailTable);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/index.js









const ProtectedEmailTemplatesPage = () => /* @__PURE__ */ react.createElement(dist.CheckPagePermissions, { permissions: constants/* PERMISSIONS */._.readEmailTemplates }, /* @__PURE__ */ react.createElement(EmailTemplatesPage, null));
const EmailTemplatesPage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist.useTracking)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const toggleNotification = (0,dist.useNotification)();
  const { lockApp, unlockApp } = (0,dist.useOverlayBlocker)();
  const queryClient = (0,es.useQueryClient)();
  const { get, put } = (0,dist.useFetchClient)();
  const { formatAPIError } = (0,dist.useAPIErrorHandler)();
  (0,dist.useFocusWhenNavigate)();
  const [isModalOpen, setIsModalOpen] = react.useState(false);
  const [templateToEdit, setTemplateToEdit] = react.useState(null);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,dist.useRBAC)({ update: constants/* PERMISSIONS */._.updateEmailTemplates });
  const { isLoading: isLoadingData, data } = (0,es.useQuery)(
    ["users-permissions", "email-templates"],
    async () => {
      const { data: data2 } = await get("/users-permissions/email-templates");
      return data2;
    },
    {
      onSuccess() {
        notifyStatus(
          formatMessage({
            id: (0,utils/* getTrad */.OB)("Email.template.data.loaded"),
            defaultMessage: "Email templates has been loaded"
          })
        );
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      }
    }
  );
  const isLoading = isLoadingForPermissions || isLoadingData;
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleEditClick = (template) => {
    setTemplateToEdit(template);
    handleToggle();
  };
  const submitMutation = (0,es.useMutation)(
    (body) => put("/users-permissions/email-templates", { "email-templates": body }),
    {
      async onSuccess() {
        await queryClient.invalidateQueries(["users-permissions", "email-templates"]);
        toggleNotification({
          type: "success",
          message: { id: "notification.success.saved", defaultMessage: "Saved" }
        });
        trackUsage("didEditEmailTemplates");
        unlockApp();
        handleToggle();
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
        unlockApp();
      },
      refetchActive: true
    }
  );
  const handleSubmit = (body) => {
    lockApp();
    trackUsage("willEditEmailTemplates");
    const editedTemplates = { ...data, [templateToEdit]: body };
    submitMutation.mutate(editedTemplates);
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(
      dist.SettingsPageTitle,
      {
        name: formatMessage({
          id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
          defaultMessage: "Email templates"
        })
      }
    ), /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        title: formatMessage({
          id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
          defaultMessage: "Email templates"
        })
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(dist.LoadingIndicatorPage, null)));
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": submitMutation.isLoading }, /* @__PURE__ */ react.createElement(
    dist.SettingsPageTitle,
    {
      name: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
        defaultMessage: "Email templates"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
        defaultMessage: "Email templates"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(components_EmailTable, { onEditClick: handleEditClick, canUpdate }), isModalOpen && /* @__PURE__ */ react.createElement(
    components_EmailForm,
    {
      template: data[templateToEdit],
      onToggle: handleToggle,
      onSubmit: handleSubmit
    }
  )));
};
/* harmony default export */ const EmailTemplates = (ProtectedEmailTemplatesPage);


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