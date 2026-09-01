/* @ds-bundle: {"format":4,"namespace":"VollerDesignSystem_295131","components":[{"name":"AppTile","sourcePath":"components/brand/AppTile.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"GlassRing","sourcePath":"components/brand/GlassRing.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ListGroup","sourcePath":"components/core/ListGroup.jsx"},{"name":"ListRow","sourcePath":"components/core/ListRow.jsx"},{"name":"Segmented","sourcePath":"components/core/Segmented.jsx"},{"name":"Slider","sourcePath":"components/core/Slider.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"},{"name":"AppStoreBadge","sourcePath":"components/web/AppStoreBadge.jsx"},{"name":"PageTabs","sourcePath":"components/web/PageTabs.jsx"},{"name":"PlanCard","sourcePath":"components/web/PlanCard.jsx"},{"name":"ProductCard","sourcePath":"components/web/ProductCard.jsx"},{"name":"SectionHead","sourcePath":"components/web/SectionHead.jsx"},{"name":"SiteFooter","sourcePath":"components/web/SiteFooter.jsx"},{"name":"VOLLER_PRODUCTS","sourcePath":"components/web/SiteHeader.jsx"},{"name":"SiteHeader","sourcePath":"components/web/SiteHeader.jsx"},{"name":"StepCard","sourcePath":"components/web/StepCard.jsx"},{"name":"TickList","sourcePath":"components/web/TickList.jsx"}],"sourceHashes":{"components/brand/AppTile.jsx":"03704dd01847","components/brand/Eyebrow.jsx":"b8919a39e59a","components/brand/GlassRing.jsx":"1cfba105f06f","components/brand/Icon.jsx":"01542cc56750","components/brand/Wordmark.jsx":"9339702b98b4","components/core/Button.jsx":"bd5078616411","components/core/Card.jsx":"3a8f1af47ff8","components/core/Chip.jsx":"66cd9d3523bf","components/core/Input.jsx":"a2aee8715d50","components/core/ListGroup.jsx":"fd11f9210844","components/core/ListRow.jsx":"8a5b4201dda1","components/core/Segmented.jsx":"f56a3b6f175c","components/core/Slider.jsx":"8fd5bf91b737","components/core/Toggle.jsx":"2b67017b7634","components/web/AppStoreBadge.jsx":"27dc29045fd8","components/web/PageTabs.jsx":"c5a861fc3351","components/web/PlanCard.jsx":"662f9b98349e","components/web/ProductCard.jsx":"e6d58d9e7222","components/web/SectionHead.jsx":"f718be096e1f","components/web/SiteFooter.jsx":"27b04e826fda","components/web/SiteHeader.jsx":"46b83a7a28bd","components/web/StepCard.jsx":"bca08a16302f","components/web/TickList.jsx":"840ce1599302","sources/productChangelogs.ts":"3da714742ccb","sources/productMarketing.ts":"4521f5396da6","ui_kits/app-icons/IconFamily.jsx":"aec7be88ea77","ui_kits/app-store/listings.js":"ad895ade5489","ui_kits/website/Screens.jsx":"4e5127105e59","ui_kits/website/data.js":"3a33c926d32e"},"inlinedExternals":[],"unexposedExports":[{"name":"changelogForSlug","sourcePath":"sources/productChangelogs.ts"},{"name":"productChangelogs","sourcePath":"sources/productChangelogs.ts"},{"name":"productMarketing","sourcePath":"sources/productMarketing.ts"}]} */

(() => {

const __ds_ns = (window.VollerDesignSystem_295131 = window.VollerDesignSystem_295131 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/AppTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  unpickle: "assets/product-icons/unpickle.png",
  unjumble: "assets/product-icons/unjumble.png",
  riverly: "assets/product-icons/riverly.png",
  "meal-planner": "assets/product-icons/meal-planner.png",
  voller: "assets/brand/voller-icon.svg"
};
function AppTile({
  app = "voller",
  src,
  size = 52,
  plate,
  plateSize,
  alt = "",
  base = "",
  className = "",
  ...rest
}) {
  const resolved = src || (base ? base + "/" : "") + (ICONS[app] || ICONS.voller);
  const img = /*#__PURE__*/React.createElement("img", _extends({
    className: ["v-tile", className].filter(Boolean).join(" "),
    src: resolved,
    alt: alt,
    width: size,
    height: size,
    style: {
      width: size,
      height: size
    }
  }, rest));
  if (!plate) return img;
  const outer = plateSize || Math.round(size * 1.3);
  return /*#__PURE__*/React.createElement("div", {
    className: "v-tile-plate",
    style: {
      width: outer,
      height: outer
    }
  }, img);
}
Object.assign(__ds_scope, { AppTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AppTile.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  className = "",
  as = "p",
  ...rest
}) {
  return React.createElement(as, {
    className: ["eyebrow", className].filter(Boolean).join(" "),
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/GlassRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GlassRing({
  size = 96,
  children,
  src,
  alt = "",
  className = "",
  ...rest
}) {
  const outer = Math.round(size * 1.14);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["v-glass", className].filter(Boolean).join(" "),
    style: {
      width: outer,
      height: outer
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    width: size,
    height: size,
    style: {
      width: size,
      height: size
    }
  }) : children);
}
Object.assign(__ds_scope, { GlassRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GlassRing.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide, at 1.75px stroke with round caps — the documented icon substitution for the
   family (voller.uk itself ships lucide-react). Load the UMD build once per page:
   <script src="https://unpkg.com/lucide@0.462.0/dist/umd/lucide.js"></script>
   No emoji, no unicode glyphs as icons. */
const camel = k => k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
function useLucide() {
  const [ready, setReady] = React.useState(() => Boolean(typeof window !== "undefined" && window.lucide));
  React.useEffect(() => {
    if (ready) return;
    let tries = 0;
    const t = setInterval(() => {
      if (typeof window !== "undefined" && window.lucide) {
        setReady(true);
        clearInterval(t);
      } else if (++tries > 60) clearInterval(t);
    }, 50);
    return () => clearInterval(t);
  }, [ready]);
  return ready;
}
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  className = "",
  ...rest
}) {
  const ready = useLucide();
  const lib = ready && typeof window !== "undefined" ? window.lucide.icons || window.lucide : null;
  const node = lib ? lib[name] : null;
  const children = Array.isArray(node) ? node : node && node[2] ? node[2] : null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      flex: "none",
      display: "block"
    }
  }, rest), children ? children.map((child, i) => {
    const [tag, attrs] = child;
    const props = {};
    Object.keys(attrs || {}).forEach(k => {
      props[camel(k)] = attrs[k];
    });
    return React.createElement(tag, {
      key: i,
      ...props
    });
  }) : null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  size = 22,
  href = "/",
  onDark,
  as,
  className = "",
  ...rest
}) {
  const Tag = as || (href ? "a" : "span");
  const props = Tag === "a" ? {
    href
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["v-wordmark", className].filter(Boolean).join(" "),
    style: {
      fontSize: size,
      color: onDark ? "var(--cream-dark)" : undefined
    }
  }, props, rest), /*#__PURE__*/React.createElement("span", null, "Voller"), /*#__PURE__*/React.createElement("i", {
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  primary: "v-btn--primary",
  quiet: "v-btn--quiet",
  destructive: "v-btn--destructive",
  gold: "v-btn--gold"
};
function Button({
  variant = "primary",
  children,
  iconLeft,
  iconRight,
  block,
  disabled,
  href,
  type = "button",
  onClick,
  className = "",
  ...rest
}) {
  const cls = ["v-btn", VARIANT[variant] || VARIANT.primary, block ? "v-btn--block" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children, iconRight);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    onClick: onClick
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    onClick: onClick
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  eyebrow,
  title,
  children,
  footer,
  tight,
  sunken,
  href,
  accent,
  className = "",
  ...rest
}) {
  const cls = ["v-card", tight ? "v-card--tight" : "", sunken ? "v-card--sunken" : "", href ? "v-card--link" : "", accent || "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("span", {
    className: "v-card__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    className: "v-card__body"
  }, children) : null, footer);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  tint: "v-chip--tint",
  selected: "v-chip--selected",
  alert: "v-chip--alert",
  outline: "v-chip--outline"
};
function Chip({
  variant = "tint",
  children,
  icon,
  onClick,
  className = "",
  ...rest
}) {
  const cls = ["v-chip", VARIANT[variant] || VARIANT.tint, className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon, children);
  if (onClick) return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    onClick: onClick
  }, rest), inner);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  note,
  error,
  textarea,
  strong,
  id,
  className = "",
  ...rest
}) {
  const cls = ["v-input", strong ? "v-input--strong" : "", className].filter(Boolean).join(" ");
  const control = textarea ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    className: cls
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: cls
  }, rest));
  if (!label && !note && !error) return control;
  return /*#__PURE__*/React.createElement("label", {
    className: "v-field",
    htmlFor: id
  }, label ? /*#__PURE__*/React.createElement("span", null, label) : null, control, error ? /*#__PURE__*/React.createElement("span", {
    className: "v-field__note v-field__note--error"
  }, error) : note ? /*#__PURE__*/React.createElement("span", {
    className: "v-field__note"
  }, note) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ListGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ListGroup({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["v-list", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { ListGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ListGroup.jsx", error: String((e && e.message) || e) }); }

// components/core/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ListRow({
  label,
  value,
  chevron,
  control,
  variant = "default",
  onClick,
  className = "",
  children,
  ...rest
}) {
  const cls = ["v-row", variant === "action" ? "v-row--action" : "", variant === "danger" ? "v-row--danger" : "", onClick ? "v-row--tap" : "", className].filter(Boolean).join(" ");
  const body = children || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, label), control ? control : null, value != null ? /*#__PURE__*/React.createElement("span", {
    className: "v-row__value"
  }, value) : null, chevron ? /*#__PURE__*/React.createElement("span", {
    className: "v-row__chevron",
    "aria-hidden": "true"
  }, chevron === true ? "\u203A" : chevron) : null);
  if (onClick) return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    onClick: onClick
  }, rest), body);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), body);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Segmented.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Segmented({
  options = [],
  value,
  onChange,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["v-seg", className].filter(Boolean).join(" "),
    role: "tablist"
  }, rest), options.map(opt => {
    const key = typeof opt === "string" ? opt : opt.value;
    const label = typeof opt === "string" ? opt : opt.label;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      role: "tab",
      className: "v-seg__opt",
      "aria-selected": value === key,
      onClick: onChange ? () => onChange(key) : undefined
    }, label);
  }));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/core/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Slider({
  value = 50,
  min = 0,
  max = 100,
  onChange,
  label,
  className = "",
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, (value - min) / (max - min) * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["v-slider", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "v-slider__rail"
  }), /*#__PURE__*/React.createElement("span", {
    className: "v-slider__fill",
    style: {
      width: pct + "%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "v-slider__knob",
    style: {
      left: pct + "%"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    value: value,
    min: min,
    max: max,
    "aria-label": label,
    onChange: onChange ? e => onChange(Number(e.target.value)) : undefined,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      cursor: "pointer",
      margin: 0
    }
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Slider.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toggle({
  checked = false,
  onChange,
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "aria-label": label,
    className: ["v-toggle", className].filter(Boolean).join(" "),
    onClick: onChange ? () => onChange(!checked) : undefined
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "v-toggle__knob"
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/web/AppStoreBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const AppleLogo = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 384 512",
  width: "26",
  height: "26",
  "aria-hidden": "true",
  focusable: "false",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
}));
function AppStoreBadge({
  href = "#",
  label = "Download on the App Store",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: ["v-appstore", className].filter(Boolean).join(" "),
    href: href,
    "aria-label": label,
    target: "_blank",
    rel: "noreferrer"
  }, rest), /*#__PURE__*/React.createElement(AppleLogo, null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("small", null, "Download on the"), /*#__PURE__*/React.createElement("strong", null, "App Store")));
}
Object.assign(__ds_scope, { AppStoreBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/AppStoreBadge.jsx", error: String((e && e.message) || e) }); }

// components/web/PageTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PageTabs({
  tabs = [],
  current,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["v-tabs", className].filter(Boolean).join(" ")
  }, rest), tabs.map(tab => /*#__PURE__*/React.createElement("a", {
    key: tab.label,
    href: tab.href || "#",
    "aria-current": current === tab.label ? "page" : undefined,
    onClick: tab.onClick
  }, tab.label)));
}
Object.assign(__ds_scope, { PageTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/PageTabs.jsx", error: String((e && e.message) || e) }); }

// components/web/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  name,
  status,
  description,
  app,
  icon,
  accent = "violet",
  href = "#",
  base = "",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: ["v-productcard", accent, className].filter(Boolean).join(" "),
    href: href
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "v-productcard__top"
  }, /*#__PURE__*/React.createElement("span", null, status), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ArrowUpRight",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "v-productcard__body"
  }, /*#__PURE__*/React.createElement(__ds_scope.AppTile, {
    app: app,
    src: icon,
    size: 52,
    base: base,
    className: "v-productcard__icon"
  }), /*#__PURE__*/React.createElement("h2", null, name), /*#__PURE__*/React.createElement("p", null, description), /*#__PURE__*/React.createElement("span", {
    className: "v-learnmore"
  }, "Learn more ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ArrowUpRight",
    size: 15
  }))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/web/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHead({
  eyebrow,
  title,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["v-sectionhead", className].filter(Boolean).join(" ")
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement("h2", null, title), children ? /*#__PURE__*/React.createElement("p", null, children) : null);
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/web/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VOLLER_PRODUCTS = [{
  slug: "unjumble",
  name: "UnJumble",
  app: "unjumble"
}, {
  slug: "unpickle",
  name: "UnPickle",
  app: "unpickle"
}, {
  slug: "meal-planner",
  name: "Meal Planner",
  app: "meal-planner"
}, {
  slug: "riverly",
  name: "Riverly",
  app: "riverly"
}];
function SiteHeader({
  products = VOLLER_PRODUCTS,
  base = "",
  onNavigate,
  sticky,
  className = "",
  ...rest
}) {
  const go = slug => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(slug);
    }
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ["v-header", className].filter(Boolean).join(" "),
    style: sticky ? {
      position: "sticky",
      top: 0,
      zIndex: 5
    } : undefined
  }, rest), /*#__PURE__*/React.createElement("nav", {
    className: "v-header__nav",
    "aria-label": "Main navigation"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 22,
    href: "#",
    onClick: go("")
  }), /*#__PURE__*/React.createElement("div", {
    className: "v-header__products"
  }, products.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.slug,
    className: "v-header__link",
    href: "#" + p.slug,
    onClick: go(p.slug)
  }, /*#__PURE__*/React.createElement(__ds_scope.AppTile, {
    app: p.app,
    size: 20,
    base: base
  }), " ", p.name)), /*#__PURE__*/React.createElement("a", {
    className: "v-header__link",
    href: "#support",
    onClick: go("support")
  }, "Support"))));
}
Object.assign(__ds_scope, { VOLLER_PRODUCTS, SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/web/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  products = __ds_scope.VOLLER_PRODUCTS,
  base = "",
  year = new Date().getFullYear(),
  className = "",
  ...rest
}) {
  const icon = (base ? base + "/" : "") + "assets/brand/voller-icon.svg";
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: ["v-footer", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "v-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    width: "34",
    height: "34"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    as: "span",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "v-footer__copyright"
  }, "\xA9 ", year, " Voller."))), /*#__PURE__*/React.createElement("div", {
    className: "v-footer__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#support"
  }, "Support"), products.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.slug + "-privacy",
    href: "#" + p.slug + "-privacy"
  }, p.name, " privacy")), products.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.slug + "-changelog",
    href: "#" + p.slug + "-changelog"
  }, p.name, " changelog"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/web/StepCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepCard({
  number,
  title,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["v-step", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "v-step__number"
  }, number), /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/web/TickList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TickList({
  items = [],
  card,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: ["v-ticks", card ? "v-ticks--card" : "", className].filter(Boolean).join(" ")
  }, rest), items.map(item => /*#__PURE__*/React.createElement("li", {
    key: typeof item === "string" ? item : item.key
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 16
  }), " ", item)));
}
Object.assign(__ds_scope, { TickList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/TickList.jsx", error: String((e && e.message) || e) }); }

// components/web/PlanCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PlanCard({
  name,
  price,
  was,
  blurb,
  features = [],
  featured,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["v-plan", featured ? "v-plan--featured" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("h3", null, name), /*#__PURE__*/React.createElement("p", {
    className: "v-plan__price"
  }, price, was ? /*#__PURE__*/React.createElement("span", {
    className: "v-plan__was"
  }, was) : null), /*#__PURE__*/React.createElement("p", null, blurb), /*#__PURE__*/React.createElement(__ds_scope.TickList, {
    items: features
  }));
}
Object.assign(__ds_scope, { PlanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/PlanCard.jsx", error: String((e && e.message) || e) }); }

// sources/productChangelogs.ts
try { (() => {
const unjumble = {
  entries: [{
    version: "1.2",
    posted: "29 August 2026",
    status: "On the App Store",
    notes: ["Know what you want before you say it? Hold the record button. Choose what a recording will become — email, message, note, meeting notes, AI prompt, or to-do list — before you start talking, and the finished draft is waiting when you tap Finish. The same choice is on your Home Screen: long-press the UnJumble icon and pick one, and the app opens already recording.", "The structured version is ready before you ask for it. The tidied-up, headed and bulleted version of a transcript is now written alongside the title and summary, so the Structured tab is already filled in by the time you open it.", "More screen, better used. Grouping by tag now reads as sections down the page instead of sideways-scrolling columns, and works on iPhone as well as iPad. On an iPad, opening a recording puts the \"Turn into…\" actions beside the transcript. Layout and filters now share one View options screen.", "A plan you can say in one sentence. Everything about capturing a recording is free and unlimited: recording, transcription, titles, summaries, the structured version of the transcript, your own tags, and search. The free plan now includes three \"Turn into…\" drafts a day, and UnJumble Pro makes them unlimited. Automatic tagging has moved to UnJumble Pro; creating tags and applying them yourself stays free."]
  }]
};
const productChangelogs = {
  unjumble,
  unpickle: {
    entries: []
  },
  "meal-planner": {
    entries: []
  },
  riverly: {
    entries: []
  }
};
const changelogForSlug = slug => productChangelogs[slug];
Object.assign(__ds_scope, { productChangelogs, changelogForSlug });
})(); } catch (e) { __ds_ns.__errors.push({ path: "sources/productChangelogs.ts", error: String((e && e.message) || e) }); }

// sources/productMarketing.ts
try { (() => {
const unjumble = {
  tagline: "Turn voice into clarity.",
  lede: "UnJumble is for the moments when typing would interrupt your flow — a thought on a walk, a follow-up after a meeting, a brief you want to get down before you lose it. Talk, and get back something you can actually use.",
  gallery: [{
    src: "/screenshots/unjumble/1-library.png",
    alt: "The UnJumble library listing recordings with titles, summaries and tags",
    caption: "A searchable library"
  }, {
    src: "/screenshots/unjumble/8-queuedaction.png",
    alt: "The recorder timing a recording, with a chip above it reading When you finish, AI prompt",
    caption: "Set before you speak"
  }, {
    src: "/screenshots/unjumble/2-detail.png",
    alt: "A recording showing its title, summary, playback controls and transcript",
    caption: "Title, summary, transcript"
  }, {
    src: "/screenshots/unjumble/5-actions.png",
    alt: "The Turn into list offering an email draft, message, Apple Note and meeting notes",
    caption: "Turn it into something"
  }, {
    src: "/screenshots/unjumble/6-result.png",
    alt: "Generated meeting notes with decisions, owners and open questions",
    caption: "Ready to send"
  }],
  steps: [{
    title: "Talk",
    copy: "Tap the record button and say it however it comes out. The screen stays awake, and there is a live level meter so you know it is listening."
  }, {
    title: "Let it un-jumble",
    copy: "Your speech is transcribed on your device, then given a sensible title and a short summary. The full transcript stays there when you need the detail, alongside a structured version written at the same time."
  }, {
    title: "Turn it into what you need",
    copy: "One tap turns a recording into an email draft, a message, a note, meeting notes, a to-do list, or a prompt for your development tool. Already know which one you want? Hold the record button before you start and it is waiting when you finish."
  }],
  outputsTitle: "One recording, whatever you needed from it",
  outputsCopy: "Every recording keeps its transcript and summary. What you make from it is up to you — and you can adjust the tone before it is written, or with Pro save a default style you always want used.",
  outputs: [{
    name: "Email draft",
    copy: "Opens a pre-filled compose sheet in Mail, subject and all."
  }, {
    name: "Message",
    copy: "A short version, ready to share in whichever app you choose."
  }, {
    name: "Apple Note",
    copy: "Formatted for Notes and sent straight to the share sheet."
  }, {
    name: "Meeting notes",
    copy: "Decisions, who has what, and what is still open."
  }, {
    name: "To-do list",
    copy: "The actions pulled out of what you said, as a clean list."
  }, {
    name: "AI prompt",
    copy: "A detailed, structured brief for your preferred development tool."
  }, {
    name: "Custom",
    copy: "Ask for anything else and describe the result you want."
  }],
  highlights: [{
    eyebrow: "Hold to record",
    title: "Know what it is for? Say so before you start.",
    copy: "Hold the record button and choose what the recording will become — an email, a message, an Apple Note, meeting notes, an AI prompt, or a to-do list — then just talk. Tap Finish and the draft writes itself while you get on with the next one. A chip at the top of the recorder shows the choice, so you can switch it part-way through or drop it and simply keep the recording. Tapping the record button works exactly as it always has.",
    points: ["Pick from six actions before you say a word", "The recorder shows your choice, and lets you change it", "Tap Finish and the draft arrives on its own", "A plain tap records just as it did before"],
    shot: {
      src: "/screenshots/unjumble/7-holdmenu.png",
      alt: "The record button held down, showing a Record and turn into\u2026 menu listing a to-do list, AI prompt, meeting notes, Apple Note, message and email draft",
      caption: "Choose before you talk"
    }
  }, {
    eyebrow: "Unfinished recordings · UnJumble Pro",
    title: "Not finished talking? Put it down and come back.",
    copy: "Hold a recording and save it as a draft. It is transcribed, titled and summarised straight away and marked in orange in your library, so you can see at a glance what you left unfinished. Open it later to carry on recording, and the title and summary are rewritten to cover everything it now contains.",
    points: ["Pause mid-thought without losing it", "Drafts are processed like any other recording", "Carry on recording later and it catches up"],
    shot: {
      src: "/screenshots/unjumble/3-recorder.png",
      alt: "The UnJumble recording screen with a timer, level meter, pause, finish and save-as-draft controls",
      caption: "Save as draft"
    }
  }, {
    eyebrow: "Tags",
    title: "Tag your recordings your way.",
    copy: "Create the tags you actually use and assign them yourself, as many as you like, on the free plan. With UnJumble Pro, new recordings are tagged as they finish — only ever from your own list, and never a tag it invented for you. Pro also lets you say what each tag means in your own words — what it covers, what it should never be used for, or both — so tagging follows your definition instead of guessing from the name.",
    points: ["Your own tags, applied by hand, free and unlimited", "Automatic tagging with Pro, from your list only", "Never invents a tag", "Write a rule for each tag with Pro"],
    shot: {
      src: "/screenshots/unjumble/4-tagrule.png",
      alt: "A tag rule written in plain English describing what the Development tag covers and excludes",
      caption: "Your rule, in your words"
    }
  }, {
    eyebrow: "Library",
    title: "Everything you have said, still findable.",
    copy: "Search by name or content, filter by tag, and swipe to re-tag or delete. Play the original audio at up to 2× and drag to any moment in it. Read the transcript plainly or switch to the structured version, which is written alongside the title and summary so it is ready by the time you open it. Deleted recordings wait 30 days in Recently Deleted, and with iCloud on, everything syncs privately between your iPhone and iPad.",
    points: ["Search names and content", "Playback at 1× to 2× with scrubbing", "Plain and structured transcripts, both ready up front", "30-day Recently Deleted", "Private iCloud sync across your devices"],
    shot: {
      src: "/screenshots/unjumble/ipad-library.png",
      alt: "UnJumble on iPad showing the recording library as a two-column grid of cards, with the search field and a single view-options control above it",
      caption: "On iPhone and iPad"
    },
    wide: true
  }, {
    eyebrow: "On iPad",
    title: "A screen that size should not be one column.",
    copy: "Open a recording on a full-screen iPad and the title, summary, player and transcript stay on the left, while everything you can turn it into moves to its own column on the right \u2014 so the action you want is in reach without scrolling past a transcript you have already read. Portrait and landscape both get it, and an iPad sharing its screen in a narrow Split View keeps the single column, just as a phone does. The library itself lays out as a grid of cards, and grouping by tag reads as sections down the page.",
    points: ["Transcript on the left, Turn into\u2026 on the right", "Portrait and landscape both get two columns", "A grid of cards rather than one long list", "A narrow Split View keeps the single column"],
    shot: {
      src: "/screenshots/unjumble/ipad-detail.png",
      alt: "UnJumble on an iPad in landscape with a recording open: its summary, player and transcript on the left, and a Turn into column on the right listing email draft, message, Apple Note, meeting notes, AI prompt, to-do list and custom",
      caption: "Read and act at once"
    },
    wide: true
  }],
  privacy: {
    title: "Built to keep your voice yours",
    copy: "Recording people is personal, so UnJumble does as much as it can on the device in your hand — and asks before anything else happens.",
    points: [{
      title: "Transcribed on your device",
      copy: "Speech becomes text using Apple's on-device transcription. The audio itself never leaves your device."
    }, {
      title: "On-device AI where it can",
      copy: "Titles, summaries and the structured version of your transcript are written by Apple Intelligence on-device when your device supports it. Drafts always use UnJumble's AI service, which needs a more capable model than the one on your device."
    }, {
      title: "You are asked first",
      copy: "Anything that would send text to UnJumble's AI service is blocked behind an in-app permission request that names the data and who receives it. You can withdraw it in Settings."
    }, {
      title: "Nothing kept on the server",
      copy: "The managed service stores no transcripts, recordings, prompts or generated content — only an anonymous identifier and a count of the drafts made that day, deleted automatically after 30 days."
    }]
  },
  plansTitle: "Free to use, with more if you want it",
  plansCopy: "Everything about capturing a recording is free and unlimited: recording, on-device transcription, titles and summaries, the structured version of your transcript, your own tags and search. The only daily limit is on turning a recording into a draft.",
  plans: [{
    name: "Free",
    price: "£0",
    blurb: "The whole app for capturing and understanding recordings, plus three drafts a day.",
    features: ["Unlimited recording and on-device transcription", "Unlimited titles, summaries and structured transcripts", "Your own tags, applied by hand, and full search", "3 drafts a day — email, message, note, meeting notes, AI prompt or to-do list", "Your allowance returns at midnight UTC", "30-day Recently Deleted and private iCloud sync"]
  }, {
    name: "UnJumble Pro",
    price: "£1.99/month or £14.99/year",
    blurb: "Unlimited drafts, automatic tagging, and more say over what comes out.",
    featured: true,
    features: ["Everything in Free", "Unlimited drafts, with no daily limit", "Automatic tagging, from your own tag list only", "Write a rule for each of your tags", "Pause a recording and save it as a draft", "Saved default styles for every kind of draft", "Your own email sign-off, message tone and note format"]
  }],
  requirements: "UnJumble is free on the App Store and requires iOS 26 or later on iPhone and iPad. Subscriptions renew automatically unless cancelled in your Apple Account settings."
};
const unpickle = {
  tagline: "Project management for life's bigger plans.",
  lede: "A wedding, a renovation, a house move, a trip with friends — the plans that matter rarely fit a to-do list. UnPickle gives them a proper board, without the weight of software built for enterprise teams.",
  notice: {
    label: "iPhone app coming soon",
    copy: "The web app is live today and works on any phone, tablet or computer. A native iPhone app is on the way — watch this space."
  },
  steps: [{
    title: "Describe it",
    copy: "Say what you are planning in plain English. UnPickle's AI sets up the sections, the columns that suit it, and a few charts worth watching — then refines it as you tell it more."
  }, {
    title: "Shape the board",
    copy: "Add tasks and subtasks, change the columns, and work in a table or as cards. Click any cell to edit it — no dialogs, no saving."
  }, {
    title: "Bring people in",
    copy: "Invite people as contributors or viewers. Everything syncs live, mentions notify them, and due dates chase themselves."
  }],
  outputsTitle: "Made for the plans people actually make",
  outputsCopy: "UnPickle started as a tool for the projects that happen once or twice in a life — the ones with a date, a budget, and too many moving parts to hold in your head.",
  outputs: [{
    name: "Weddings",
    copy: "Venues, guest lists, suppliers and the running total, in one place."
  }, {
    name: "Renovations",
    copy: "Track trades, materials, budget against actual, and what is blocking what."
  }, {
    name: "House moves",
    copy: "Every form, quote and cut-off date, with nothing left to memory."
  }, {
    name: "Family events",
    copy: "Birthdays, anniversaries and reunions, shared with everyone helping."
  }, {
    name: "Group trips",
    copy: "Itineraries, costs and who is booking what, agreed in the open."
  }, {
    name: "Gifts and holidays",
    copy: "Lists and ideas kept year-round instead of rebuilt each December."
  }, {
    name: "Small teams",
    copy: "The same boards work for a side business or a small team at work."
  }],
  highlights: [{
    eyebrow: "Boards",
    title: "Boards that bend to the plan, not the other way round",
    copy: "Columns are the point. Pick from text, dates, people, status, labels, numbers, currency, budget and actual, formulas and more — then set defaults so new rows arrive half-filled. Mark one date column as the project's due date and everything else follows from it.",
    points: ["Sections, tasks and subtasks", "Table view or card view", "Fourteen column types, including formulas", "Default values, including dynamic dates and people", "Import from Excel with column mapping", "Export the whole project to Excel"]
  }, {
    eyebrow: "Together",
    title: "Everyone on the same page, at the same moment",
    copy: "Invite people as contributors who can edit, or viewers who can follow along. Changes appear as they happen. Mention someone in a comment and they hear about it — including a push notification when the app is closed.",
    points: ["Owner, contributor and viewer roles", "Threaded comments and @mentions", "A full activity log on every task", "Attachments gathered on a Files page", "A communications centre for mentions and due dates", "Push notifications when the app is shut"]
  }, {
    eyebrow: "Overview",
    title: "See where it actually stands",
    copy: "Charts for budget against actual, progress and workload come ready-made. Build your own when you want something specific, and let the AI chart assistant suggest what is worth plotting.",
    points: ["Ready-made progress and budget charts", "Custom widgets and charts with Pro", "A dedicated dashboard tab with Pro", "Secondary tabs with parent/child linking with Pro", "In-app help, plus an AI help assistant"]
  }],
  plansTitle: "Pro is free while we are getting started",
  plansCopy: "Everything that makes UnPickle worth using — boards, AI setup, real-time collaboration, Excel import, attachments and notifications — is in the free plan. Pro lifts the limits and adds the analytics, and for a limited time early adopters get all of it for nothing.",
  plans: [{
    name: "Personal",
    price: "Free forever",
    blurb: "Enough for a wedding, a renovation, or a couple of projects at once.",
    features: ["Up to 3 projects of your own, plus any number shared with you", "50 tasks per project, including subtasks", "2 contributors per project, on top of you", "5 MB per file, 50 MB of storage per project", "10 AI help requests a day", "AI project setup, Excel import and real-time collaboration"]
  }, {
    name: "Pro",
    price: "Free for early adopters",
    was: "then £2 per user/month",
    blurb: "For bigger plans, more people, and the numbers behind them. Free for a limited time while we are getting started — sign up now and use all of it.",
    featured: true,
    features: ["Everything in Personal", "Unlimited projects, tasks and contributors", "50 MB per file, 1 GB of storage per project", "Custom widgets and charts", "The dashboard analytics tab", "Excel export and multi-tab linking"]
  }],
  requirements: "UnPickle runs in any modern browser on phone, tablet and desktop, with a native iPhone app on the way. Free to start, and no card needed."
};
const riverly = {
  tagline: "Know the river before you get to it.",
  lede: "Riverly is for the people who take a boat out on the Thames and the Wey — a day on the water, a week afloat, or the same stretch every weekend. It knows where the locks are, which channel is the navigation and which is the weir, and how long the run really takes once the locks are counted.",
  notice: {
    label: "Coming soon",
    copy: "The locks, the riverside places, the river geometry and the routing are all in place, and the app is being finished now. Say you are interested and we will tell you when it reaches the App Store."
  },
  gallery: [{
    src: "/screenshots/riverly/1-map.png",
    alt: "The Riverly map at Windsor with the navigable Thames channel drawn boldly, lock, pub and no-entry markers, and the boat's own position",
    caption: "The river, drawn properly"
  }, {
    src: "/screenshots/riverly/2-lock.png",
    alt: "Romney Lock showing how it is operated, its fall, postcode, opening times and facilities",
    caption: "Every lock, in detail"
  }, {
    src: "/screenshots/riverly/3-mooring.png",
    alt: "Bray Marina's Riverly tab showing mooring with conditions, the source behind it, secure overnight stay and distance to the water",
    caption: "Can you tie up?"
  }, {
    src: "/screenshots/riverly/4-navigating.png",
    alt: "A route drawn in orange from Cookham Lock to Romney Lock with a navigation card reading 16 km, 5 locks, 2 h 47 min and an ETA",
    caption: "Distance, locks, ETA"
  }],
  steps: [{
    title: "See where you are",
    copy: "The map opens on your boat, with the navigable channel drawn boldly and weir streams and backwaters faint behind it. Tappable no-entry signs mark the water you must not take, and say why."
  }, {
    title: "Plan the run",
    copy: "Choose where you are starting and finishing — a lock, a marina, a pub, a saved pin, or a point you tap on the map. Set your cruising speed and how long you allow per lock."
  }, {
    title: "Cruise it",
    copy: "Distance left, locks remaining, time and ETA sit on both the Map and the Speedo. The Speedo reads GPS speed and heading on a dial, and keeps the screen awake while you are using it."
  }],
  outputsTitle: "Built for the boats that actually use these rivers",
  outputsCopy: "Riverly covers the Thames and the Wey & Godalming Navigations: 61 locks with their facilities, hours, postcodes and contacts, and over a thousand riverside places, all carried inside the app rather than fetched when you are out of signal.",
  outputs: [{
    name: "Day trips",
    copy: "Find out whether the pub two locks upstream is lunch or the whole afternoon."
  }, {
    name: "Weekends afloat",
    copy: "Marinas, fuel, water, pump-out and refuse along the way, with what each lock has."
  }, {
    name: "New to locks",
    copy: "Every lock says how it is worked, whether a keeper is on duty, and when."
  }, {
    name: "Narrowboats and cruisers",
    copy: "Set the limit for the reach you are on and watch the dial before you cross it."
  }, {
    name: "The Wey",
    copy: "All sixteen National Trust locks up to Godalming, joined to the Thames at the real junction."
  }, {
    name: "Mooring",
    copy: "Where you can tie up is researched and sourced — and says so plainly when it has not been checked."
  }, {
    name: "Planning at home",
    copy: "Work the trip out on the sofa, save it, and run it again next season."
  }],
  highlights: [{
    eyebrow: "The map",
    title: "The channel you can take, and the water you can't.",
    copy: "Riverly draws the verified navigable channel boldly and leaves weir streams and backwaters as fainter lines that it will never route you down. Weirs and private or no-boat channels carry no-entry signs you can tap for the reason. Riverly's own boating records and live Apple Maps results sit together on one place screen — Riverly's tab for what matters afloat, Apple's for the address, phone number, opening hours and reviews.",
    points: ["Thames and Wey navigation geometry, drawn as it really runs", "No-entry markers on weirs and boat-prohibited channels", "61 locks with facilities, opening times, postcodes and contacts", "Over a thousand riverside pubs, marinas, fuel points and hotels", "Mooring answered yes, limited, no — or honestly unknown", "Live Apple Maps search alongside Riverly's own records", "North-up or heading-up, centred on your boat"],
    shot: {
      src: "/screenshots/riverly/5-search.png",
      alt: "A search for Bell listing Riverly's own lock and pub records, with a separate Apple Maps section beneath them",
      caption: "One search, two sources"
    }
  }, {
    eyebrow: "Journeys",
    title: "River miles, not straight lines — and locks counted properly.",
    copy: "A route is planned along the navigable channel itself, built from waterway topology with weirs and boat-prohibited channels removed as barriers, so the distance is the one you will actually steer. Start or finish upstream of a lock, at it, or downstream of it, and Riverly counts only the locks you will genuinely have to work. Give it your cruising speed and your own lock allowance and it returns distance, locks, cruising time, lock time, total time and an ETA.",
    points: ["Distance, locks, cruising time, lock time, total and ETA", "Start or finish anywhere, including a point you tap on the map", "Upstream, at the lock, or downstream — so the count is right", "Your cruising speed and your own minutes per lock", "Stops along the way", "Set a home mooring once and it becomes a one-tap start", "Save a journey and run it again"],
    shot: {
      src: "/screenshots/riverly/6-directions.png",
      alt: "The Directions sheet with Cookham Lock and Romney Lock chosen, each with an upstream, at lock or downstream choice, above cruising speed and lock transit sliders",
      caption: "Which side of the lock"
    }
  }, {
    eyebrow: "Speedo",
    title: "An instrument you can read at a glance from the helm.",
    copy: "Speed shows on a dial rather than as a bare number, with the digital figure inside the face and your course beneath it. Set the limit for the reach you are on and a marker appears on the dial, so you can see the threshold before you cross it. Go over and the dial zone, the arc, the readout and the edge of the screen intensify together — a slight drift over looks different from a serious overspeed.",
    points: ["GPS speed and compass bearing, live", "An optional speed limit with an on-dial marker", "An alert that scales with how far over you are", "mph or knots, chosen once and used everywhere", "A compact speed badge on the map too", "The screen stays awake while you are cruising", "Your position stays on your device"]
  }, {
    eyebrow: "Ask AI · optional",
    title: "Bring your own AI, or bring none at all.",
    copy: "Everything above works with no AI connected. If you want it, connect a key from Anthropic, OpenAI, Google or xAI — it is kept in your device's Keychain and sent only to that provider, on your account. Ask about a lock, a place, a pin or a journey, and when navigation starts Riverly offers to check the river's conditions once. It searches the navigation authorities first and the wider web second, and has to say which of the two an answer came from, so an Environment Agency closure never reads like a forum rumour. Decline the check and it is recorded as skipped — an unchecked river is never shown as a clear one.",
    points: ["Fully usable with no AI connected at all", "Anthropic, OpenAI, Google or xAI — your key, your account", "Stored in the device Keychain, sent only to that provider", "Questions send just the item's name, type and location", "A conditions check that asks first and runs once", "Official findings kept apart from unverified ones", "What each feature has used, counted on your device"],
    shot: {
      src: "/screenshots/riverly/7-ai.png",
      alt: "The Connect to AI screen with the service set to Anthropic, an API key field, a model choice, and a note that the key stays in the device Keychain",
      caption: "Your key, your account"
    }
  }],
  plansTitle: "Free, with nothing to sign into",
  plansCopy: "Riverly's locks, places and river geometry ship inside the app, so the map, the planning and the instruments work with no account, no subscription and no dependence on a signal you may not have. The only thing that costs anything is AI, and only if you choose to connect a key of your own.",
  plans: [{
    name: "Riverly",
    price: "Free",
    blurb: "The whole app: the river, the locks, the planning and the instruments.",
    featured: true,
    features: ["61 locks across the Thames and the Wey, with facilities and hours", "Over a thousand riverside places, plus live Apple Maps search", "Routing along the verified navigable channel", "Live GPS speed, heading, locks remaining and ETA", "Saved journeys, saved pins and a home mooring", "No account, no subscription, no sign-in"]
  }, {
    name: "With your own AI key",
    price: "Whatever your provider charges",
    blurb: "Optional, and off until you turn it on. Riverly adds no charge of its own — you connect a key you already have and pay that provider directly.",
    features: ["Everything in Riverly", "Ask about any lock, place, pin or journey", "A river conditions check when navigation starts", "Official sources searched before the open web", "Your choice of Anthropic, OpenAI, Google or xAI", "Usage per feature, kept on your device"]
  }],
  requirements: "Riverly is coming to the App Store for iPhone and will need iOS 18 or later. Riverly's data is boating guidance, not a substitute for official navigation notices, river conditions, local signage or the skipper's judgement."
};
const mealPlanner = {
  tagline: "Answer \u201cwhat\u2019s for dinner?\u201d once, on a Sunday.",
  lede: "Meal Planner is for a household of two who cook most nights and would rather not decide at six o\u2019clock. Fill in the week from the recipes you already cook, say who is actually in for each meal, and the shopping list builds itself out of what you chose \u2014 in the order you walk round the shop.",
  notice: {
    label: "Coming soon",
    copy: "The app is built and in use \u2014 the week, the shopping list, the recipe imports, the cooking timers and sharing all work. Say you are interested and we will tell you when it reaches the App Store."
  },
  gallery: [{
    src: "/screenshots/meal-planner/1-plan.png",
    alt: "The Meal Planner week showing Tuesday and Wednesday, each with a lunch and a dinner, the people eating shown as coloured initials, and View and Cook buttons",
    caption: "The week, in one page"
  }, {
    src: "/screenshots/meal-planner/2-shop.png",
    alt: "The shopping list grouped into Bakery and Fresh meat and fish, with a whole chicken ticked off and a counter reading 4 of 32 in the trolley",
    caption: "One list, in aisle order"
  }, {
    src: "/screenshots/meal-planner/3-meals.png",
    alt: "The saved recipes list showing Chicken and leek pie, Chicken katsu curry and Fish pie with their tags and ratings out of ten",
    caption: "Everything you cook"
  }, {
    src: "/screenshots/meal-planner/4-recipe.png",
    alt: "A recipe showing its rating, cooking time, cookbook and page, a Serves row from 1 to 8 with 4 chosen, and the ingredients beneath",
    caption: "Scaled to who is eating"
  }, {
    src: "/screenshots/meal-planner/5-cook.png",
    alt: "Cook mode with three of six ingredients ticked off and the first method step struck through",
    caption: "Cooking, tick by tick"
  }, {
    src: "/screenshots/meal-planner/6-timers.png",
    alt: "Two cooking timers running at once, one named Rice counting down from twelve minutes and one named Curry from twenty-five",
    caption: "Two timers, both named"
  }],
  steps: [{
    title: "Fill in the week",
    copy: "Pick the day your week starts on and turn lunch or dinner off if you never plan them. Every meal is edited where it sits \u2014 a saved recipe, something you type, or both in one dinner."
  }, {
    title: "Say who is in",
    copy: "Toggle each of you on or off for that meal, add guests for the night your parents come, or mark a whole day away. Meal Planner works out how many it is cooking for and scales the recipe\u2019s quantities to match."
  }, {
    title: "Shop, then cook",
    copy: "Add the week\u2019s ingredients to your standing list, check them meal by meal, and shop from one list in aisle order. When you cook, the recipe fills the screen at the right quantities and the screen stays awake."
  }],
  outputsTitle: "Built for the week a household actually has",
  outputsCopy: "Meal Planner holds one week at a time \u2014 seven days of lunches and dinners, for you and one other person, with guests on the nights there are more.",
  outputs: [{
    name: "Two people, one plan",
    copy: "Share the plan with one other person and you both edit it from your own phone."
  }, {
    name: "Nights you are out",
    copy: "Switch someone off a meal, or mark the whole day away, and it stops counting towards the shop."
  }, {
    name: "Guests",
    copy: "Add extra mouths to one meal and only that meal\u2019s quantities go up."
  }, {
    name: "Recipes you already have",
    copy: "From a web page, a photograph of a cookbook page, or typed in yourself."
  }, {
    name: "Meals with no recipe",
    copy: "\u201cFish and chips from the chippy\u201d is a perfectly good Friday, and the list knows it needs nothing."
  }, {
    name: "The supermarket run",
    copy: "One standing list, grouped by aisle, ticked off into the trolley as you go."
  }, {
    name: "Cooking itself",
    copy: "The whole recipe on screen, scaled, with timers you can set out loud."
  }],
  highlights: [{
    eyebrow: "The week",
    title: "A meal is not always one thing, and not always everyone.",
    copy: "A dinner can be a saved recipe and a thing you typed \u2014 the bolognese and the garlic ciabatta \u2014 and both go on the shopping list. Who\u2019s in is per meal, not per day, so a Wednesday where one of you is at five-a-side shops for one. Add guests and the count goes up for that meal only; Meal Planner shows the figure it landed on rather than making you trust it. Swap a meal onto another day, note something about it, or move the whole week and it keeps up.",
    points: ["Several items in one meal, recipes and typed alike", "Attendance per meal, with guests on top", "The servings figure shown, not assumed", "Whole days marked away in one tap", "Swap or move a meal to another day", "Weekly totals: meals in and meals out, per person", "Lunch or dinner switched off if you never plan it"],
    shot: {
      src: "/screenshots/meal-planner/7-editor.png",
      alt: "The Saturday dinner editor with Spaghetti bolognese and Garlic ciabatta as two items, toggles for who is in, a guests toggle, and a Cooking for row reading 4 people",
      caption: "Two items, four people"
    }
  }, {
    eyebrow: "The shopping list",
    title: "A list you own, not one the app keeps rebuilding.",
    copy: "The list is always there. Adding a week\u2019s meals is an append you review meal by meal, not a regeneration that wipes what you put on it yourself. Lines that are the same shop written two ways are found and offered for merging, with the quantities added up properly \u2014 2oz and 200ml of the same oil become one line, in metric. Things you always have in go on a staples list and are never asked for again. Things you buy that no recipe calls for are remembered, so next time they are a tap.",
    points: ["One standing list, grouped into nine aisles plus Other", "A week\u2019s meals added as a reviewable batch", "Duplicate lines merged, quantities summed in metric", "Staples never listed \u2014 \u201cblack pepper\u201d covers \u201cground black pepper\u201d", "What you usually buy, offered by how often you buy it", "Tick into the trolley; \u201cI\u2019ve done this shop\u201d clears only those", "Anything you could not find stays for next time"],
    shot: {
      src: "/screenshots/meal-planner/8-staples.png",
      alt: "The Staples sheet listing black pepper, olive oil, plain flour, salt and tea bags, above a note that recipes needing them show them crossed off rather than adding them to the list",
      caption: "Never asked for again"
    }
  }, {
    eyebrow: "Recipes",
    title: "Three ways in, and one of them is a photograph of a book.",
    copy: "Paste a URL and the page is read into a proper recipe. Photograph a cookbook page \u2014 and the cover, if you want the book and page number recorded \u2014 and it comes back the same way. Or type it yourself. Every recipe carries the number of people its quantities were written for, which is what lets the serving-size row rescale them for four, or six, or one. Tag suggestions only ever come from tags you already have, and the notes field is yours: nothing writes to it.",
    points: ["Import from a web page, a cookbook photo, or by hand", "Book and page recorded, so you can find it again", "Ratings out of ten, asked for after you cook", "Search, filter and group by your own tags", "Serving sizes that rescale the quantities", "Photos of the dish, synced to the other person", "Your notes stay yours \u2014 never filled in automatically"],
    shot: {
      src: "/screenshots/meal-planner/9-addrecipe.png",
      alt: "The Add Recipe sheet offering Manual, From URL and From Photo, the last described as scanning a recipe page from a cookbook",
      caption: "However the recipe reached you"
    }
  }, {
    eyebrow: "Cooking",
    title: "Timers you set by saying them.",
    copy: "Hold a length in your head, say \u201cninety second sausage timer\u201d or \u201can hour and a half for the joint\u201d, and that is the timer \u2014 length and label, from one sentence. Wheels are there when a kitchen is too loud to be heard in. Several run at once, and because the moment a timer matters is the moment you have put the phone down, each one appears on the Lock Screen and in the Dynamic Island with the countdown and a Stop button on it.",
    points: ["Spoken timers: the length and what it is for, in one sentence", "\u201cAn hour and a half\u201d, \u201ctwo minutes ten\u201d, \u201cthree quarters of an hour\u201d", "Wheels instead, whenever you would rather", "Several timers at once, each named", "On the Lock Screen and in the Dynamic Island, with Stop", "The recipe scaled to the people eating it that night", "The screen stays awake while you cook"],
    shot: {
      src: "/screenshots/meal-planner/10-saytimer.png",
      alt: "The Say a timer sheet listening, with a waveform and the prompt Say how long, and what for, above a Set on screen button",
      caption: "Say how long, and what for"
    }
  }, {
    eyebrow: "Sharing",
    title: "Two people, one plan, both editing it.",
    copy: "Invite one person with a twelve-character code that expires after a day. From then on you are editing the same week from two phones: a meal one of you changes appears for the other, and the shopping list converges rather than splitting in two, so whoever gets to the shop first is shopping from the real list. Someone who does not want an account can be added for planning only \u2014 they appear in the week and count towards the cooking without needing a phone of their own.",
    points: ["One collaborator, invited by a code good for 24 hours", "Meals, recipes, tags and the shopping list, all live", "One shopping list between you, not two copies", "Or add someone for planning only, with no account", "Everyone picks their own avatar colour or photo", "A daily reminder naming that day\u2019s meal, and what to defrost", "Sign in with Apple, and nothing else asked for"],
    shot: {
      src: "/screenshots/meal-planner/11-settings.png",
      alt: "Settings showing the account signed in with Apple, the plan and its people: Jack as plan owner and Beth as remote collaborator",
      caption: "Who is on the plan"
    }
  }],
  privacy: {
    title: "What leaves your phone, and what does not",
    copy: "A meal plan is a fairly complete account of a household\u2019s week, so it is worth being plain about where it goes.",
    points: [{
      title: "Sign in with Apple, and that is all",
      copy: "No email to confirm, no password to invent, no profile to fill in. Your name comes from your Apple Account, and you can hide your email as Apple offers."
    }, {
      title: "The plan syncs, because it has to",
      copy: "The plan, its recipes and the shopping list are stored in Google Firebase so your collaborator sees your edits and a new phone gets your plan back. Recipe photos are downscaled before they are uploaded rather than sent at full size."
    }, {
      title: "AI is given words, not the plan",
      copy: "Importing a recipe sends that page or photo; filing the shop sends the item names; working out what a typed meal needs sends its name and how many are eating. It goes to Meal Planner\u2019s own service in London, which passes it to the model and hands the answer straight back without keeping a copy."
    }, {
      title: "The reminder never leaves the phone",
      copy: "The daily \u201ctonight you\u2019re having\u2026\u201d notification is written and scheduled on the device. Nothing about your week goes to a server to have a sentence composed about it."
    }]
  },
  plansTitle: "Free, with nothing to buy",
  plansCopy: "There is no paid tier, no trial and nothing held back \u2014 the app contains no purchasing code at all. Everything below is simply what Meal Planner is.",
  plans: [{
    name: "Meal Planner",
    price: "Free",
    blurb: "The whole app: the week, the recipes, the shopping list, the cooking and sharing it with one other person.",
    featured: true,
    features: ["The full week, lunches and dinners, for two people plus guests", "Unlimited saved recipes, tags, ratings and photos", "Recipe import from a web page or a cookbook photo", "One standing shopping list, in aisle order, with staples", "Cook mode, and timers you can set by saying them", "Live sharing with one collaborator, by invite code", "A daily reminder of what you are having"]
  }],
  requirements: "Meal Planner is coming to the App Store for iPhone and iPad and will need iOS 26 or later. It uses Sign in with Apple, and a plan can be shared with one other person."
};
const productMarketing = {
  unjumble,
  unpickle,
  riverly,
  "meal-planner": mealPlanner
};
Object.assign(__ds_scope, { productMarketing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "sources/productMarketing.ts", error: String((e && e.message) || e) }); }

// ui_kits/app-icons/IconFamily.jsx
try { (() => {
/* The app-icon family, drawn from the exported PNGs in assets/app-icons/.
   Nothing here is redrawn — the SVG masters and PNGs are the source of truth. */
const IF_DS = window.VollerDesignSystem_295131;
const IF = {
  AppTile: IF_DS.AppTile,
  Eyebrow: IF_DS.Eyebrow,
  Chip: IF_DS.Chip,
  Card: IF_DS.Card,
  Wordmark: IF_DS.Wordmark
};
const IFB = "../..";
const APPS = [{
  name: "UnPickle",
  verb: "unwrapping",
  gold: "the ribbon crossing and unwinding off the body",
  footprint: "730",
  dir: "UnPickle",
  files: {
    light: "AppIcon-512@2x.png",
    dark: "AppIcon-Dark-512@2x.png",
    tinted: "AppIcon-Tinted-512@2x.png"
  }
}, {
  name: "Meal Planner",
  verb: "planning / ticking off",
  gold: "the three checkmarks",
  footprint: "812 × 636",
  dir: "MealPlanner",
  files: {
    light: "appstore.png",
    dark: "appstore-dark.png",
    tinted: "appstore-tinted.png"
  }
}, {
  name: "UnJumble",
  verb: "recording",
  gold: "the band on the mic head",
  footprint: "720",
  dir: "UnJumble",
  files: {
    light: "UnJumble-AppIcon.png",
    dark: "UnJumble-AppIcon-Dark.png",
    tinted: "UnJumble-AppIcon-Tinted.png"
  }
}, {
  name: "Riverly",
  verb: "navigating",
  gold: "the boat hull",
  footprint: "780",
  dir: "Riverly",
  files: {
    light: "AppIcon-1024.png",
    dark: "AppIcon-Dark-1024.png",
    tinted: "AppIcon-Tinted-1024.png"
  }
}];
const VARIANTS = [{
  key: "light",
  label: "Light / Any",
  note: "Fully opaque. Fills the square. Also the fallback below iOS 18.",
  plate: "#FCFCF6"
}, {
  key: "dark",
  label: "Dark",
  note: "Transparent background by design — the system composites its own backdrop.",
  plate: "#1B1B19"
}, {
  key: "tinted",
  label: "Tinted",
  note: "Grayscale art on solid black. The system tints the luminance, so map for contrast.",
  plate: "#000000"
}];
const tile = (app, variant, size) => IFB + "/assets/app-icons/" + app.dir + "/" + app.files[variant];
function IconGrid() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "150px repeat(4, 1fr)",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null), APPS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name,
    style: {
      fontSize: 14,
      fontWeight: 500,
      textAlign: "center"
    }
  }, a.name)), VARIANTS.map(v => /*#__PURE__*/React.createElement(React.Fragment, {
    key: v.key
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IF.Eyebrow, null, v.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      lineHeight: 1.45
    }
  }, v.note)), APPS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name + v.key,
    style: {
      display: "grid",
      placeItems: "center",
      background: v.plate,
      borderRadius: 20,
      padding: 16,
      border: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: tile(a, v.key),
    alt: a.name + " " + v.label,
    width: "104",
    height: "104",
    style: {
      width: 104,
      height: 104,
      borderRadius: "23.5%",
      display: "block"
    }
  }))))));
}
function SizeLadder() {
  const sizes = [104, 60, 40, 29];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      alignItems: "flex-end",
      flexWrap: "wrap"
    }
  }, APPS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-end"
    }
  }, sizes.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: "grid",
      gap: 6,
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: tile(a, "light"),
    alt: "",
    width: s,
    height: s,
    style: {
      width: s,
      height: s,
      borderRadius: "23.5%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mono)",
      fontSize: 10,
      color: "var(--text-muted)"
    }
  }, s))))));
}
function GoldTable() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, APPS.map(a => /*#__PURE__*/React.createElement(IF.Card, {
    key: a.name,
    tight: true,
    eyebrow: "Verb · " + a.verb,
    title: a.name
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "Gold sits on ", a.gold, "."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mono)",
      fontSize: 11,
      color: "var(--text-muted)",
      letterSpacing: ".04em"
    }
  }, "Optical footprint ", a.footprint, " of 1024")))));
}
Object.assign(window, {
  IconGrid,
  SizeLadder,
  GoldTable,
  VOLLER_APPS: APPS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app-icons/IconFamily.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app-store/listings.js
try { (() => {
/* Subtitles, promo text and descriptions written in the house voice from the
   copy in voller_website/src/content/productMarketing.ts. Screenshot sets are
   the ones the site ships. */
window.VollerListings = [{
  name: "UnJumble",
  app: "unjumble",
  live: true,
  price: "Free · Pro £1.99/month",
  requirements: "iOS 26 · iPhone and iPad",
  url: "https://apps.apple.com/gb/app/unjumble/id6793312720",
  subtitle: "Turn voice into clarity",
  promo: "Talk, and get back something you can use: a titled, summarised, searchable note — then an email, a message, meeting notes or a to-do list.",
  description: "Record a voice note and UnJumble transcribes it on your device, gives it a sensible title and a short summary, and files it in a searchable library.",
  absences: ["No account. No sign-in.", "Audio never leaves your device.", "Nothing kept on the server."],
  shots: ["assets/screenshots/unjumble/1-library.png", "assets/screenshots/unjumble/2-detail.png", "assets/screenshots/unjumble/3-recorder.png", "assets/screenshots/unjumble/5-actions.png"]
}, {
  name: "Riverly",
  app: "riverly",
  live: false,
  price: "£9.99 once",
  requirements: "iOS 26 · iPhone",
  subtitle: "Know the river before it",
  promo: "Every lock, marina and riverside place on the Thames and the Wey — routed along the channel, not a straight line.",
  description: "Riverly plans a route along the navigable channel and counts the locks you will actually work. Live speed, heading, locks remaining and ETA sit on the helm.",
  absences: ["No subscription.", "The whole river travels inside the app.", "No account needed to plan a run."],
  shots: ["assets/screenshots/riverly/1-map.png", "assets/screenshots/riverly/2-lock.png", "assets/screenshots/riverly/4-navigating.png"]
}, {
  name: "Meal Planner",
  app: "meal-planner",
  live: false,
  price: "Free",
  requirements: "iOS 26 · iPhone",
  subtitle: "Plan the week you'll cook",
  promo: "Build a week of lunches and dinners from the recipes you already love, then shop from it.",
  description: "Build weekly meal plans, save and organise recipes, import a recipe from a web page or a cookbook photo, and share a plan with your household.",
  absences: ["No ads between recipes.", "No calorie tracking.", "Your recipes stay on your device."],
  shots: ["assets/screenshots/meal-planner/1-plan.png", "assets/screenshots/meal-planner/3-meals.png", "assets/screenshots/meal-planner/5-cook.png", "assets/screenshots/meal-planner/6-timers.png"]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app-store/listings.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* voller.uk recreated from src/pages/*.tsx and src/index.css. Composed from the
   design-system components — no primitive is re-implemented here. */
const DS = window.VollerDesignSystem_295131;
const {
  SiteHeader,
  SiteFooter,
  ProductCard,
  StepCard,
  PlanCard,
  TickList,
  PageTabs,
  AppStoreBadge,
  SectionHead,
  Button,
  Card,
  Input,
  Icon,
  AppTile,
  Eyebrow
} = DS;
const B = "../..";
const asset = p => B + "/" + p;
const Container = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: "min(1120px, calc(100% - 40px))",
    margin: "0 auto",
    ...style
  }
}, children);
function HubScreen({
  products,
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gap: 24,
      alignContent: "start",
      padding: "72px 0 56px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      maxWidth: 950,
      textWrap: "balance",
      fontSize: "clamp(42px,7vw,78px)",
      lineHeight: 1.03,
      letterSpacing: "-.045em",
      fontWeight: 600
    }
  }, "For the everyday, and the ", /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, "every-so-often"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 660,
      textWrap: "pretty"
    }
  }, "Voller builds apps for both: focused, simple, and more powerful than they look.")), /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 24,
      paddingBottom: 72
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.slug,
    base: B,
    app: p.app,
    accent: p.accent,
    name: p.name,
    status: p.status,
    description: p.description,
    href: "#" + p.slug,
    onClick: e => {
      e.preventDefault();
      go(p.slug);
    }
  }))));
}
function ProductScreen({
  product,
  marketing,
  go
}) {
  const m = marketing;
  return /*#__PURE__*/React.createElement("main", {
    className: "marketing-page " + product.accent
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "24px 0 0"
    }
  }, /*#__PURE__*/React.createElement(PageTabs, {
    current: "Overview",
    tabs: [{
      label: "Overview"
    }, {
      label: "Changelog",
      onClick: e => {
        e.preventDefault();
        go(product.slug + "/changelog");
      }
    }]
  })), /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gap: 16,
      justifyItems: "start",
      padding: "32px 0 56px"
    }
  }, /*#__PURE__*/React.createElement(AppTile, {
    app: product.app,
    size: 86,
    plate: true,
    plateSize: 112,
    base: B
  }), /*#__PURE__*/React.createElement(Eyebrow, null, product.status), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(42px,7vw,72px)",
      lineHeight: 1.03,
      letterSpacing: "-.045em",
      fontWeight: 600
    }
  }, product.name), m && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 660,
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-.02em",
      lineHeight: 1.3
    }
  }, m.tagline), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 660
    }
  }, product.detail), m && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 660,
      color: "var(--text-muted)",
      fontSize: 14
    }
  }, m.lede), m && m.notice && /*#__PURE__*/React.createElement("p", {
    style: {
      display: "grid",
      gap: 8,
      maxWidth: 660,
      padding: "16px 20px",
      borderRadius: "var(--radius-card)",
      background: "var(--accent-tile)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--mono)",
      color: "var(--accent-ink)",
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: ".1em",
      textTransform: "uppercase"
    }
  }, m.notice.label), " ", m.notice.copy), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center",
      marginTop: 16,
      flexWrap: "wrap"
    }
  }, product.appStoreUrl ? /*#__PURE__*/React.createElement(AppStoreBadge, {
    href: product.appStoreUrl,
    label: "Download " + product.name + " on the App Store"
  }) : product.externalUrl ? /*#__PURE__*/React.createElement(Button, {
    href: product.externalUrl,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowUpRight",
      size: 17
    })
  }, "Visit ", product.name) : /*#__PURE__*/React.createElement(Button, {
    href: "mailto:support@voller.uk?subject=Keep me posted",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowUpRight",
      size: 17
    })
  }, "Keep me posted"), /*#__PURE__*/React.createElement("a", {
    href: "#changelog",
    onClick: e => {
      e.preventDefault();
      go(product.slug + "/changelog");
    },
    style: {
      fontSize: 14,
      fontWeight: 500,
      textDecoration: "underline",
      textUnderlineOffset: 4,
      borderBottom: 0
    }
  }, "Changelog"), /*#__PURE__*/React.createElement("a", {
    href: "#privacy",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      textDecoration: "underline",
      textUnderlineOffset: 4,
      borderBottom: 0
    }
  }, "Privacy policy"))), m && m.gallery && /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + m.gallery.length + ", 1fr)",
      gap: 24,
      paddingBottom: 72
    }
  }, m.gallery.map(shot => /*#__PURE__*/React.createElement("figure", {
    key: shot.src,
    style: {
      display: "grid",
      gap: 12,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: asset(shot.src),
    alt: "",
    loading: "lazy",
    style: {
      width: "100%",
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--rule)",
      background: "var(--surface)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      color: "var(--text-muted)",
      fontSize: 14
    }
  }, shot.caption)))), m && /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      paddingBottom: 72
    }
  }, m.steps.map((s, i) => /*#__PURE__*/React.createElement(StepCard, {
    key: s.title,
    number: i + 1,
    title: s.title
  }, s.copy))), m && /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: m.outputsTitle
  }, m.outputsCopy), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "32px 0 0",
      padding: 0,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, m.outputs.map(o => /*#__PURE__*/React.createElement("li", {
    key: o.name
  }, /*#__PURE__*/React.createElement(Card, {
    tight: true,
    title: null
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16
    }
  }, o.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, o.copy)))))), m && m.highlights.map((h, i) => /*#__PURE__*/React.createElement(Container, {
    key: h.title,
    style: {
      display: "grid",
      gridTemplateColumns: i % 2 ? "340px 1fr" : "1fr 340px",
      gap: 56,
      alignItems: "center",
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16,
      alignContent: "start",
      order: i % 2 ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, h.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(26px,3.6vw,34px)"
    }
  }, h.title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 660
    }
  }, h.copy), /*#__PURE__*/React.createElement(TickList, {
    items: h.points
  })), h.shot && /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      borderRadius: "var(--radius-card)",
      padding: 24,
      display: "grid",
      gap: 16,
      justifyItems: "center",
      background: "var(--accent-tile)",
      order: i % 2 ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: asset(h.shot.src),
    alt: "",
    loading: "lazy",
    style: {
      width: "100%",
      maxWidth: 288,
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--rule)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--mono)",
      color: "var(--accent-ink)",
      fontSize: 12,
      letterSpacing: ".1em",
      textTransform: "uppercase"
    }
  }, h.shot.caption)))), m && m.privacy && /*#__PURE__*/React.createElement(Container, {
    style: {
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-card)",
      background: "var(--surface)",
      padding: "clamp(24px,5vw,56px)",
      marginBottom: 72
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Privacy",
    title: m.privacy.title
  }, m.privacy.copy), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 32
    }
  }, m.privacy.points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      display: "grid",
      gap: 8,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, p.copy)))), /*#__PURE__*/React.createElement("a", {
    href: "#privacy",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      marginTop: 32,
      fontSize: 14,
      fontWeight: 500,
      textDecoration: "underline",
      textUnderlineOffset: 4,
      borderBottom: 0
    }
  }, "Read the full privacy policy ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowUpRight",
    size: 15
  }))), m && /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: m.plansTitle
  }, m.plansCopy), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "grid",
      gridTemplateColumns: m.plans.length > 1 ? "repeat(2, 1fr)" : "1fr",
      gap: 24
    }
  }, m.plans.map(p => /*#__PURE__*/React.createElement(PlanCard, _extends({
    key: p.name
  }, p))))), m && /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gap: 24,
      justifyItems: "center",
      textAlign: "center",
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(26px,3.6vw,34px)"
    }
  }, m.tagline), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 660
    }
  }, m.requirements), product.appStoreUrl ? /*#__PURE__*/React.createElement(AppStoreBadge, {
    href: product.appStoreUrl,
    label: "Download " + product.name + " on the App Store"
  }) : /*#__PURE__*/React.createElement(Button, {
    href: "mailto:support@voller.uk?subject=Keep me posted",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowUpRight",
      size: 17
    })
  }, "Keep me posted")));
}
function ChangelogScreen({
  product,
  entries,
  go
}) {
  return /*#__PURE__*/React.createElement("main", {
    className: "marketing-page " + product.accent
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "24px 0 0"
    }
  }, /*#__PURE__*/React.createElement(PageTabs, {
    current: "Changelog",
    tabs: [{
      label: "Overview",
      onClick: e => {
        e.preventDefault();
        go(product.slug);
      }
    }, {
      label: "Changelog"
    }]
  })), /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gap: 24,
      justifyItems: "start",
      maxWidth: 800,
      padding: "32px 0 72px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, product.name), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34
    }
  }, "What has changed"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "24px 0 0",
      padding: 0,
      width: "100%"
    }
  }, (entries || []).map((e, i) => /*#__PURE__*/React.createElement("li", {
    key: e.version,
    style: {
      marginTop: i ? 32 : 0,
      paddingTop: i ? 32 : 0,
      borderTop: i ? "1px solid var(--rule)" : 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22
    }
  }, "Version ", e.version), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontFamily: "var(--mono)",
      color: "var(--accent-ink)",
      fontSize: 12,
      letterSpacing: ".1em",
      textTransform: "uppercase"
    }
  }, e.status, " \xB7 ", e.date), /*#__PURE__*/React.createElement(TickList, {
    items: e.points
  }))), !entries && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8
    }
  }, "Nothing to report yet."))));
}
function SupportScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(760px, calc(100% - 40px))",
      margin: "0 auto",
      padding: "72px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(34px,5vw,44px)"
    }
  }, "Support"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 660
    }
  }, "Tell us what happened and we will get back to you. One person reads these, so plain detail helps more than a form field ever could.")), /*#__PURE__*/React.createElement("form", {
    style: {
      marginTop: 32,
      display: "grid",
      gap: 24,
      justifyItems: "start",
      padding: "clamp(24px,6vw,40px)",
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius-card)",
      background: "var(--surface)"
    },
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "s-name",
    label: "Your name",
    strong: true,
    placeholder: "Jack"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "s-email",
    label: "Email",
    strong: true,
    placeholder: "you@example.com",
    note: "We reply from support@voller.uk."
  }), /*#__PURE__*/React.createElement(Input, {
    id: "s-app",
    label: "Which app",
    strong: true,
    placeholder: "UnJumble"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "s-msg",
    label: "What is happening?",
    strong: true,
    textarea: true,
    rows: 5,
    placeholder: "Describe what you did and what happened instead."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, sent ? "Sent — thank you" : "Send message"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 14
    }
  }, "We keep your message and email address only to answer you."))));
}
Object.assign(window, {
  HubScreen,
  ProductScreen,
  ChangelogScreen,
  SupportScreen,
  VollerKitContainer: Container
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Content lifted verbatim from voller_website: src/content/products.ts and
   src/content/productMarketing.ts. Copy, not invention — the voice is the source. */
window.VollerContent = {
  products: [{
    slug: "unjumble",
    name: "UnJumble",
    app: "unjumble",
    status: "Available now",
    accent: "violet",
    description: "Turn spoken thoughts into clear, useful notes.",
    detail: "Record a voice note and UnJumble transcribes it on your device, gives it a sensible title and a short summary, and files it in a searchable library. Then turn it into an email, a message, an Apple Note, meeting notes, a to-do list, or a detailed AI prompt.",
    appStoreUrl: "https://apps.apple.com/gb/app/unjumble/id6793312720"
  }, {
    slug: "unpickle",
    name: "UnPickle",
    app: "unpickle",
    status: "Available now",
    accent: "lime",
    description: "Project management for the plans and people that matter.",
    detail: "UnPickle helps individuals, families and small teams make space for their projects — from a wedding or renovation to the next big idea.",
    externalUrl: "https://unpickle.uk"
  }, {
    slug: "meal-planner",
    name: "Meal Planner",
    app: "meal-planner",
    status: "Coming soon",
    accent: "orange",
    description: "Plan the week's lunches and dinners around the recipes you love.",
    detail: "Build weekly meal plans, save and organise recipes, import recipes from a web page or cookbook photo, and share a plan with your household."
  }, {
    slug: "riverly",
    name: "Riverly",
    app: "riverly",
    status: "Coming soon",
    accent: "blue",
    description: "Boat navigation for the Thames and Wey & Godalming Navigations.",
    detail: "Riverly maps every lock, marina and riverside place on the Thames and the Wey, plans a route along the navigable channel rather than a straight line, and counts the locks you will actually work. Live GPS speed, heading, locks remaining and ETA sit on the helm, and the whole river travels inside the app."
  }],
  marketing: {
    unjumble: {
      tagline: "Turn voice into clarity.",
      lede: "UnJumble is for the moments when typing would interrupt your flow — a thought on a walk, a follow-up after a meeting, a brief you want to get down before you lose it. Talk, and get back something you can actually use.",
      gallery: [{
        src: "assets/screenshots/unjumble/1-library.png",
        caption: "A searchable library"
      }, {
        src: "assets/screenshots/unjumble/3-recorder.png",
        caption: "Set before you speak"
      }, {
        src: "assets/screenshots/unjumble/2-detail.png",
        caption: "Title, summary, transcript"
      }, {
        src: "assets/screenshots/unjumble/5-actions.png",
        caption: "Turn it into something"
      }],
      steps: [{
        title: "Talk",
        copy: "Tap the record button and say it however it comes out. The screen stays awake, and there is a live level meter so you know it is listening."
      }, {
        title: "Let it un-jumble",
        copy: "Your speech is transcribed on your device, then given a sensible title and a short summary. The full transcript stays there when you need the detail, alongside a structured version written at the same time."
      }, {
        title: "Turn it into what you need",
        copy: "One tap turns a recording into an email draft, a message, a note, meeting notes, a to-do list, or a prompt for your development tool."
      }],
      outputsTitle: "One recording, whatever you needed from it",
      outputsCopy: "Every recording keeps its transcript and summary. What you make from it is up to you — and you can adjust the tone before it is written, or with Pro save a default style you always want used.",
      outputs: [{
        name: "Email draft",
        copy: "Opens a pre-filled compose sheet in Mail, subject and all."
      }, {
        name: "Message",
        copy: "A short version, ready to share in whichever app you choose."
      }, {
        name: "Apple Note",
        copy: "Formatted for Notes and sent straight to the share sheet."
      }, {
        name: "Meeting notes",
        copy: "Decisions, who has what, and what is still open."
      }],
      highlights: [{
        eyebrow: "Library",
        title: "Everything you have said, still findable.",
        copy: "Search by name or content, filter by tag, and swipe to re-tag or delete. Play the original audio at up to 2× and drag to any moment in it. Deleted recordings wait 30 days in Recently Deleted, and with iCloud on, everything syncs privately between your iPhone and iPad.",
        points: ["Search names and content", "Playback at 1× to 2× with scrubbing", "Plain and structured transcripts, both ready up front", "30-day Recently Deleted", "Private iCloud sync across your devices"],
        shot: {
          src: "assets/screenshots/unjumble/1-library.png",
          caption: "On iPhone and iPad"
        }
      }, {
        eyebrow: "Tags",
        title: "Tag your recordings your way.",
        copy: "Create the tags you actually use and assign them yourself, as many as you like, on the free plan. With UnJumble Pro, new recordings are tagged as they finish — only ever from your own list, and never a tag it invented for you.",
        points: ["Your own tags, applied by hand, free and unlimited", "Automatic tagging with Pro, from your list only", "Never invents a tag", "Write a rule for each tag with Pro"],
        shot: {
          src: "assets/screenshots/unjumble/5-actions.png",
          caption: "Your rule, in your words"
        }
      }],
      privacy: {
        title: "Built to keep your voice yours",
        copy: "Recording people is personal, so UnJumble does as much as it can on the device in your hand — and asks before anything else happens.",
        points: [{
          title: "Transcribed on your device",
          copy: "Speech becomes text using Apple's on-device transcription. The audio itself never leaves your device."
        }, {
          title: "On-device AI where it can",
          copy: "Titles, summaries and the structured version of your transcript are written by Apple Intelligence on-device when your device supports it."
        }, {
          title: "You are asked first",
          copy: "Anything that would send text to UnJumble's AI service is blocked behind an in-app permission request that names the data and who receives it."
        }, {
          title: "Nothing kept on the server",
          copy: "The managed service stores no transcripts, recordings, prompts or generated content — only an anonymous identifier and a count of the drafts made that day."
        }]
      },
      plansTitle: "Free to use, with more if you want it",
      plansCopy: "Everything about capturing a recording is free and unlimited: recording, on-device transcription, titles and summaries, your own tags and search. The only daily limit is on turning a recording into a draft.",
      plans: [{
        name: "Free",
        price: "£0",
        blurb: "The whole app for capturing and understanding recordings, plus three drafts a day.",
        features: ["Unlimited recording and on-device transcription", "Unlimited titles, summaries and structured transcripts", "Your own tags, applied by hand, and full search", "3 drafts a day", "30-day Recently Deleted and private iCloud sync"]
      }, {
        name: "UnJumble Pro",
        price: "£1.99/month or £14.99/year",
        featured: true,
        blurb: "Unlimited drafts, automatic tagging, and more say over what comes out.",
        features: ["Everything in Free", "Unlimited drafts, with no daily limit", "Automatic tagging, from your own tag list only", "Write a rule for each of your tags", "Pause a recording and save it as a draft"]
      }],
      requirements: "UnJumble is free on the App Store and requires iOS 26 or later on iPhone and iPad. Subscriptions renew automatically unless cancelled in your Apple Account settings."
    },
    riverly: {
      tagline: "Know the river before you get to it.",
      lede: "Riverly is for the people who take a boat out on the Thames and the Wey — a day on the water, a week afloat, or the same stretch every weekend.",
      notice: {
        label: "Coming soon",
        copy: "The locks, the riverside places, the river geometry and the routing are all in place, and the app is being finished now."
      },
      gallery: [{
        src: "assets/screenshots/riverly/1-map.png",
        caption: "The navigable channel"
      }, {
        src: "assets/screenshots/riverly/2-lock.png",
        caption: "Every lock, with its detail"
      }, {
        src: "assets/screenshots/riverly/4-navigating.png",
        caption: "Locks remaining and ETA"
      }],
      steps: [{
        title: "See where you are",
        copy: "The map opens on your boat, with the navigable channel drawn boldly and weir streams and backwaters faint behind it."
      }, {
        title: "Plan the run",
        copy: "Choose where you are starting and finishing — a lock, a marina, a pub, a saved pin, or a point you tap on the map."
      }, {
        title: "Cruise it",
        copy: "Distance left, locks remaining, time and ETA sit on both the Map and the Speedo, and the screen stays awake while you steer."
      }],
      outputsTitle: "The whole river, inside the app",
      outputsCopy: "Riverly carries the Thames and the Wey & Godalming Navigations with it, so it works where the signal does not.",
      outputs: [{
        name: "Locks",
        copy: "All 61 Thames locks and the Wey's, with fall, facilities and keeper hours."
      }, {
        name: "Moorings",
        copy: "Visitor moorings, marinas and the places you can actually tie up."
      }, {
        name: "Riverside places",
        copy: "Pubs, chandlers, water points and pump-outs."
      }, {
        name: "Routing",
        copy: "A route along the channel, not a straight line — and the locks you will work."
      }],
      highlights: [],
      plansTitle: "One purchase, no subscription",
      plansCopy: "Riverly is bought once. The river data travels with the app.",
      plans: [{
        name: "Riverly",
        price: "£9.99",
        blurb: "The whole river, one payment.",
        features: ["Thames and Wey & Godalming Navigations", "Offline maps and routing", "Live speed, heading, locks remaining and ETA"],
        featured: true
      }],
      requirements: "Riverly requires iOS 26 or later on iPhone."
    }
  },
  changelog: {
    unjumble: [{
      version: "1.4",
      status: "Released",
      date: "August 2026",
      points: ["Hold the record button to choose what a recording becomes before you start.", "Unfinished recordings can be saved as drafts and carried on later.", "iPad gets a two-column recording view."]
    }, {
      version: "1.3",
      status: "Released",
      date: "July 2026",
      points: ["Automatic tagging from your own tag list, with a written rule per tag.", "Structured transcripts are written alongside the summary."]
    }],
    riverly: [{
      version: "1.0",
      status: "In progress",
      date: "Coming soon",
      points: ["Thames and Wey lock, mooring and place data complete.", "Channel-aware routing and lock counting."]
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.AppTile = __ds_scope.AppTile;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GlassRing = __ds_scope.GlassRing;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ListGroup = __ds_scope.ListGroup;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.AppStoreBadge = __ds_scope.AppStoreBadge;

__ds_ns.PageTabs = __ds_scope.PageTabs;

__ds_ns.PlanCard = __ds_scope.PlanCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.VOLLER_PRODUCTS = __ds_scope.VOLLER_PRODUCTS;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.TickList = __ds_scope.TickList;

})();
