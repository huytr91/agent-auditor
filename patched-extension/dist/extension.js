"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util, objectUtil, ZodParsedType, getParsedType;
var init_util = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js"() {
    (function(util2) {
      util2.assertEqual = (_) => {
      };
      function assertIs(_arg) {
      }
      util2.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      util2.assertNever = assertNever;
      util2.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util2.getValidEnumValues = (obj) => {
        const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util2.objectValues(filtered);
      };
      util2.objectValues = (obj) => {
        return util2.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
        const keys = [];
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util2.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
        return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      util2.joinValues = joinValues;
      util2.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util || (util = {}));
    (function(objectUtil2) {
      objectUtil2.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil || (objectUtil = {}));
    ZodParsedType = util.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    getParsedType = (data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return ZodParsedType.undefined;
        case "string":
          return ZodParsedType.string;
        case "number":
          return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
          return ZodParsedType.boolean;
        case "function":
          return ZodParsedType.function;
        case "bigint":
          return ZodParsedType.bigint;
        case "symbol":
          return ZodParsedType.symbol;
        case "object":
          if (Array.isArray(data)) {
            return ZodParsedType.array;
          }
          if (data === null) {
            return ZodParsedType.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return ZodParsedType.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return ZodParsedType.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return ZodParsedType.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return ZodParsedType.date;
          }
          return ZodParsedType.object;
        default:
          return ZodParsedType.unknown;
      }
    };
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode, quotelessJson, ZodError;
var init_ZodError = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js"() {
    init_util();
    ZodIssueCode = util.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    quotelessJson = (obj) => {
      const json = JSON.stringify(obj, null, 2);
      return json.replace(/"([^"]+)":/g, "$1:");
    };
    ZodError = class _ZodError extends Error {
      get errors() {
        return this.issues;
      }
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
          this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        };
        processError(this);
        return fieldErrors;
      }
      static assert(value) {
        if (!(value instanceof _ZodError)) {
          throw new Error(`Not a ZodError: ${value}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
          if (sub.path.length > 0) {
            const firstEl = sub.path[0];
            fieldErrors[firstEl] = fieldErrors[firstEl] || [];
            fieldErrors[firstEl].push(mapper(sub));
          } else {
            formErrors.push(mapper(sub));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError.create = (issues) => {
      const error = new ZodError(issues);
      return error;
    };
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap, en_default;
var init_en = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js"() {
    init_ZodError();
    init_util();
    errorMap = (issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodIssueCode.invalid_type:
          if (issue.received === ZodParsedType.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodIssueCode.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
          break;
        case ZodIssueCode.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
          break;
        case ZodIssueCode.invalid_union:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
          break;
        case ZodIssueCode.invalid_enum_value:
          message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodIssueCode.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodIssueCode.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodIssueCode.invalid_date:
          message = `Invalid date`;
          break;
        case ZodIssueCode.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodIssueCode.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "bigint")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.custom:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodIssueCode.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodIssueCode.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util.assertNever(issue);
      }
      return { message };
    };
    en_default = errorMap;
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var overrideErrorMap;
var init_errors = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js"() {
    init_en();
    overrideErrorMap = en_default;
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var makeIssue, EMPTY_PATH, ParseStatus, INVALID, DIRTY, OK, isAborted, isDirty, isValid, isAsync;
var init_parseUtil = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js"() {
    init_errors();
    init_en();
    makeIssue = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m) => !!m).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    };
    EMPTY_PATH = [];
    ParseStatus = class _ParseStatus {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return INVALID;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key, value } = pair;
          if (key.status === "aborted")
            return INVALID;
          if (value.status === "aborted")
            return INVALID;
          if (key.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    INVALID = Object.freeze({
      status: "aborted"
    });
    DIRTY = (value) => ({ status: "dirty", value });
    OK = (value) => ({ status: "valid", value });
    isAborted = (x) => x.status === "aborted";
    isDirty = (x) => x.status === "dirty";
    isValid = (x) => x.status === "valid";
    isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/typeAliases.js
var init_typeAliases = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/typeAliases.js"() {
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
var init_errorUtil = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js"() {
    (function(errorUtil2) {
      errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
    })(errorUtil || (errorUtil = {}));
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var ParseInputLazyPath, handleResult, ZodType, cuidRegex, cuid2Regex, ulidRegex, uuidRegex, nanoidRegex, jwtRegex, durationRegex, emailRegex, _emojiRegex, emojiRegex, ipv4Regex, ipv4CidrRegex, ipv6Regex, ipv6CidrRegex, base64Regex, base64urlRegex, dateRegexSource, dateRegex, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, ZodObject, ZodUnion, getDiscriminator, ZodDiscriminatedUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodNaN, BRAND, ZodBranded, ZodPipeline, ZodReadonly, late, ZodFirstPartyTypeKind, instanceOfType, stringType, numberType, nanType, bigIntType, booleanType, dateType, symbolType, undefinedType, nullType, anyType, unknownType, neverType, voidType, arrayType, objectType, strictObjectType, unionType, discriminatedUnionType, intersectionType, tupleType, recordType, mapType, setType, functionType, lazyType, literalType, enumType, nativeEnumType, promiseType, effectsType, optionalType, nullableType, preprocessType, pipelineType, ostring, onumber, oboolean, coerce, NEVER;
var init_types = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js"() {
    init_ZodError();
    init_errors();
    init_errorUtil();
    init_parseUtil();
    init_util();
    ParseInputLazyPath = class {
      constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (Array.isArray(this._key)) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    handleResult = (ctx, result) => {
      if (isValid(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error = new ZodError(ctx.common.issues);
            this._error = error;
            return this._error;
          }
        };
      }
    };
    ZodType = class {
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return getParsedType(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new ParseStatus(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        const ctx = {
          common: {
            issues: [],
            async: params?.async ?? false,
            contextualErrorMap: params?.errorMap
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
      }
      "~validate"(data) {
        const ctx = {
          common: {
            issues: [],
            async: !!this["~standard"].async
          },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        if (!this["~standard"].async) {
          try {
            const result = this._parseSync({ data, path: [], parent: ctx });
            return isValid(result) ? {
              value: result.value
            } : {
              issues: ctx.common.issues
            };
          } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) {
              this["~standard"].async = true;
            }
            ctx.common = {
              issues: [],
              async: true
            };
          }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        });
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params?.errorMap,
            async: true
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = (val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        };
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = () => ctx.addIssue({
            code: ZodIssueCode.custom,
            ...getIssueProperties(val)
          });
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects({
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: (data) => this["~validate"](data)
        };
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(option) {
        return ZodUnion.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects({
          ...processCreateParams(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
          ...processCreateParams(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodDefault
        });
      }
      brand() {
        return new ZodBranded({
          typeName: ZodFirstPartyTypeKind.ZodBranded,
          type: this,
          ...processCreateParams(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
          ...processCreateParams(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline.create(this, target);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    cuidRegex = /^c[^\s-]{8,}$/i;
    cuid2Regex = /^[0-9a-z]+$/;
    ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    nanoidRegex = /^[a-z0-9_-]{21}$/i;
    jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    dateRegex = new RegExp(`^${dateRegexSource}$`);
    ZodString = class _ZodString extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.string,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "email",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex) {
              emojiRegex = new RegExp(_emojiRegex, "u");
            }
            if (!emojiRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "emoji",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "uuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "nanoid") {
            if (!nanoidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "nanoid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid2",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ulid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "url",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "regex",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "date") {
            const regex = dateRegex;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "date",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "time") {
            const regex = timeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "time",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "duration") {
            if (!durationRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "duration",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ip",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "jwt") {
            if (!isValidJWT(input.data, check.alg)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "jwt",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cidr") {
            if (!isValidCidr(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cidr",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64") {
            if (!base64Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "base64",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64url") {
            if (!base64urlRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "base64url",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodIssueCode.invalid_string,
          ...errorUtil.errToObj(message)
        });
      }
      _addCheck(check) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
      }
      nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
      }
      base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
      }
      base64url(message) {
        return this._addCheck({
          kind: "base64url",
          ...errorUtil.errToObj(message)
        });
      }
      jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
      }
      cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
      }
      datetime(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          offset: options?.offset ?? false,
          local: options?.local ?? false,
          ...errorUtil.errToObj(options?.message)
        });
      }
      date(message) {
        return this._addCheck({ kind: "date", message });
      }
      time(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          ...errorUtil.errToObj(options?.message)
        });
      }
      duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil.errToObj(message)
        });
      }
      includes(value, options) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options?.position,
          ...errorUtil.errToObj(options?.message)
        });
      }
      startsWith(value, message) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil.errToObj(message)
        });
      }
      endsWith(value, message) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil.errToObj(message)
        });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    ZodString.create = (params) => {
      return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    ZodNumber = class _ZodNumber extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.number,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
      }
      get isFinite() {
        let max = null;
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          } else if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return Number.isFinite(min) && Number.isFinite(max);
      }
    };
    ZodNumber.create = (params) => {
      return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    ZodBigInt = class _ZodBigInt extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          try {
            input.data = BigInt(input.data);
          } catch {
            return this._getInvalidInput(input);
          }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
          return this._getInvalidInput(input);
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.bigint,
          received: ctx.parsedType
        });
        return INVALID;
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    ZodBigInt.create = (params) => {
      return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    ZodBoolean = class extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.boolean,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodBoolean.create = (params) => {
      return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    ZodDate = class _ZodDate extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.date,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        if (Number.isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_date
          });
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min != null ? new Date(min) : null;
      }
      get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max != null ? new Date(max) : null;
      }
    };
    ZodDate.create = (params) => {
      return new ZodDate({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
      });
    };
    ZodSymbol = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.symbol,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodSymbol.create = (params) => {
      return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
      });
    };
    ZodUndefined = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.undefined,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodUndefined.create = (params) => {
      return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
      });
    };
    ZodNull = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.null,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodNull.create = (params) => {
      return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
      });
    };
    ZodAny = class extends ZodType {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodAny.create = (params) => {
      return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
      });
    };
    ZodUnknown = class extends ZodType {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodUnknown.create = (params) => {
      return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
      });
    };
    ZodNever = class extends ZodType {
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.never,
          received: ctx.parsedType
        });
        return INVALID;
      }
    };
    ZodNever.create = (params) => {
      return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
      });
    };
    ZodVoid = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.void,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodVoid.create = (params) => {
      return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
      });
    };
    ZodArray = class _ZodArray extends ZodType {
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            addIssueToContext(ctx, {
              code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          })).then((result2) => {
            return ParseStatus.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil.toString(message) }
        });
      }
      max(maxLength, message) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil.toString(message) }
        });
      }
      length(len, message) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodArray.create = (schema, params) => {
      return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
      });
    };
    ZodObject = class _ZodObject extends ZodType {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        this._cached = { shape, keys };
        return this._cached;
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") {
          } else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath(ctx, value, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                key,
                value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return ParseStatus.mergeObjectSync(status, syncPairs);
          });
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: (issue, ctx) => {
              const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: errorUtil.errToObj(message).message ?? defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...augmentation
          })
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }),
          typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
        return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
        return new _ZodObject({
          ...this._def,
          catchall: index
        });
      }
      pick(mask) {
        const shape = {};
        for (const key of util.objectKeys(mask)) {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      omit(mask) {
        const shape = {};
        for (const key of util.objectKeys(this.shape)) {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify(this);
      }
      partial(mask) {
        const newShape = {};
        for (const key of util.objectKeys(this.shape)) {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      required(mask) {
        const newShape = {};
        for (const key of util.objectKeys(this.shape)) {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      keyof() {
        return createZodEnum(util.objectKeys(this.shape));
      }
    };
    ZodObject.create = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.strictCreate = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.lazycreate = (shape, params) => {
      return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodUnion = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError(issues2));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ZodUnion.create = (types, params) => {
      return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
      });
    };
    getDiscriminator = (type) => {
      if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
      } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
      } else if (type instanceof ZodLiteral) {
        return [type.value];
      } else if (type instanceof ZodEnum) {
        return type.options;
      } else if (type instanceof ZodNativeEnum) {
        return util.objectValues(type.enum);
      } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
      } else if (type instanceof ZodUndefined) {
        return [void 0];
      } else if (type instanceof ZodNull) {
        return [null];
      } else if (type instanceof ZodOptional) {
        return [void 0, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
      } else {
        return [];
      }
    };
    ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options) {
          const discriminatorValues = getDiscriminator(type.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams(params)
        });
      }
    };
    ZodIntersection = class extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
          if (isAborted(parsedLeft) || isAborted(parsedRight)) {
            return INVALID;
          }
          const merged = mergeValues(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_intersection_types
            });
            return INVALID;
          }
          if (isDirty(parsedLeft) || isDirty(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    ZodIntersection.create = (left, right, params) => {
      return new ZodIntersection({
        left,
        right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
      });
    };
    ZodTuple = class _ZodTuple extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return ParseStatus.mergeArray(status, results);
          });
        } else {
          return ParseStatus.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    ZodTuple.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
      });
    };
    ZodRecord = class _ZodRecord extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (ctx.common.async) {
          return ParseStatus.mergeObjectAsync(status, pairs);
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(second)
        });
      }
    };
    ZodMap = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.map,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
          return {
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key = pair.key;
            const value = pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    ZodMap.create = (keyType, valueType, params) => {
      return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
      });
    };
    ZodSet = class _ZodSet extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.set,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return INVALID;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil.toString(message) }
        });
      }
      max(maxSize, message) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodSet.create = (valueType, params) => {
      return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
      });
    };
    ZodFunction = class _ZodFunction extends ZodType {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.function,
            received: ctx.parsedType
          });
          return INVALID;
        }
        function makeArgsIssue(args, error) {
          return makeIssue({
            data: args,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_arguments,
              argumentsError: error
            }
          });
        }
        function makeReturnsIssue(returns, error) {
          return makeIssue({
            data: returns,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
          const me = this;
          return OK(async function(...args) {
            const error = new ZodError([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error.addIssue(makeArgsIssue(args, e));
              throw error;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error.addIssue(makeReturnsIssue(result, e));
              throw error;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return OK(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
          returns: returns || ZodUnknown.create(),
          typeName: ZodFirstPartyTypeKind.ZodFunction,
          ...processCreateParams(params)
        });
      }
    };
    ZodLazy = class extends ZodType {
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    ZodLazy.create = (getter, params) => {
      return new ZodLazy({
        getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
      });
    };
    ZodLiteral = class extends ZodType {
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_literal,
            expected: this._def.value
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ZodLiteral.create = (value, params) => {
      return new ZodLiteral({
        value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
      });
    };
    ZodEnum = class _ZodEnum extends ZodType {
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return _ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    ZodEnum.create = createZodEnum;
    ZodNativeEnum = class extends ZodType {
      _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(util.getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    ZodNativeEnum.create = (values, params) => {
      return new ZodNativeEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
      });
    };
    ZodPromise = class extends ZodType {
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.promise,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    ZodPromise.create = (schema, params) => {
      return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
      });
    };
    ZodEffects = class extends ZodType {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: (arg) => {
            addIssueToContext(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return INVALID;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return INVALID;
              if (result.status === "dirty")
                return DIRTY(result.value);
              if (status.value === "dirty")
                return DIRTY(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return INVALID;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID;
            if (result.status === "dirty")
              return DIRTY(result.value);
            if (status.value === "dirty")
              return DIRTY(result.value);
            return result;
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = (acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          };
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return INVALID;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!isValid(base))
              return INVALID;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!isValid(base))
                return INVALID;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                status: status.value,
                value: result
              }));
            });
          }
        }
        util.assertNever(effect);
      }
    };
    ZodEffects.create = (schema, effect, params) => {
      return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
      });
    };
    ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
      });
    };
    ZodOptional = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
          return OK(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional.create = (type, params) => {
      return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
      });
    };
    ZodNullable = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
          return OK(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable.create = (type, params) => {
      return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
      });
    };
    ZodDefault = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault.create = (type, params) => {
      return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams(params)
      });
    };
    ZodCatch = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if (isAsync(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch.create = (type, params) => {
      return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params)
      });
    };
    ZodNaN = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.nan,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
    };
    ZodNaN.create = (params) => {
      return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
      });
    };
    BRAND = Symbol("zod_brand");
    ZodBranded = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    ZodPipeline = class _ZodPipeline extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return DIRTY(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          };
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b) {
        return new _ZodPipeline({
          in: a,
          out: b,
          typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
      }
    };
    ZodReadonly = class extends ZodType {
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
          if (isValid(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        };
        return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodReadonly.create = (type, params) => {
      return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
      });
    };
    late = {
      object: ZodObject.lazycreate
    };
    (function(ZodFirstPartyTypeKind2) {
      ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
    instanceOfType = (cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom((data) => data instanceof cls, params);
    stringType = ZodString.create;
    numberType = ZodNumber.create;
    nanType = ZodNaN.create;
    bigIntType = ZodBigInt.create;
    booleanType = ZodBoolean.create;
    dateType = ZodDate.create;
    symbolType = ZodSymbol.create;
    undefinedType = ZodUndefined.create;
    nullType = ZodNull.create;
    anyType = ZodAny.create;
    unknownType = ZodUnknown.create;
    neverType = ZodNever.create;
    voidType = ZodVoid.create;
    arrayType = ZodArray.create;
    objectType = ZodObject.create;
    strictObjectType = ZodObject.strictCreate;
    unionType = ZodUnion.create;
    discriminatedUnionType = ZodDiscriminatedUnion.create;
    intersectionType = ZodIntersection.create;
    tupleType = ZodTuple.create;
    recordType = ZodRecord.create;
    mapType = ZodMap.create;
    setType = ZodSet.create;
    functionType = ZodFunction.create;
    lazyType = ZodLazy.create;
    literalType = ZodLiteral.create;
    enumType = ZodEnum.create;
    nativeEnumType = ZodNativeEnum.create;
    promiseType = ZodPromise.create;
    effectsType = ZodEffects.create;
    optionalType = ZodOptional.create;
    nullableType = ZodNullable.create;
    preprocessType = ZodEffects.createWithPreprocess;
    pipelineType = ZodPipeline.create;
    ostring = () => stringType().optional();
    onumber = () => numberType().optional();
    oboolean = () => booleanType().optional();
    coerce = {
      string: ((arg) => ZodString.create({ ...arg, coerce: true })),
      number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
      boolean: ((arg) => ZodBoolean.create({
        ...arg,
        coerce: true
      })),
      bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
      date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
    };
    NEVER = INVALID;
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});
var init_external = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js"() {
    init_errors();
    init_parseUtil();
    init_typeAliases();
    init_util();
    init_types();
    init_ZodError();
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js
var init_zod = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js"() {
    init_external();
    init_external();
  }
});

// ../protocol/src/schemas.ts
var OutcomeSchema, RiskStateSchema, AuditorModeSchema, PrivacyModeSchema, PatternFamilySchema, AgentActionSchema, AgentEventSchema, FeatureVectorSchema, SignatureSchema, OutcomeCountsSchema, PatternRecordSchema, RiskAssessmentSchema, LlmProviderSchema, SettingsSchema, AnonymousSharePayloadSchema;
var init_schemas = __esm({
  "../protocol/src/schemas.ts"() {
    "use strict";
    init_zod();
    OutcomeSchema = external_exports.enum([
      "SUCCESS",
      "RECOVERED",
      "FAILED",
      "ABORTED",
      "USER_STOPPED",
      "UNKNOWN"
    ]);
    RiskStateSchema = external_exports.enum([
      "HEALTHY",
      "SUSPICIOUS",
      "STAGNATING",
      "LOST"
    ]);
    AuditorModeSchema = external_exports.enum(["observe", "audit", "guard"]);
    PrivacyModeSchema = external_exports.enum(["local_only", "share_anonymous"]);
    PatternFamilySchema = external_exports.enum([
      "SAME_ERROR_REPEAT",
      "SAME_FILE_OSCILLATION",
      "EDIT_REVERT_EDIT",
      "NO_PROGRESS",
      "SCOPE_EXPANSION",
      "TEST_REGRESSION",
      "REPEATED_TOOL_CALL"
    ]);
    AgentActionSchema = external_exports.enum([
      "read",
      "edit",
      "write",
      "delete",
      "search",
      "run_command",
      "run_test",
      "tool_call",
      "message",
      "error",
      "revert",
      "other"
    ]);
    AgentEventSchema = external_exports.object({
      id: external_exports.string(),
      agent: external_exports.string().default("unknown"),
      session_id: external_exports.string(),
      task_id: external_exports.string().optional(),
      action: AgentActionSchema,
      tool: external_exports.string().optional(),
      /** Opaque tool-arg fingerprint (no raw args/secrets). */
      tool_args_fingerprint: external_exports.string().optional(),
      /** Abstract error class / message hash — not full stack dumps of secrets. */
      error_fingerprint: external_exports.string().optional(),
      /** File role or path hash — never file contents. */
      file_role: external_exports.string().optional(),
      file_path_hash: external_exports.string().optional(),
      test_result: external_exports.object({
        passed: external_exports.number().int().nonnegative(),
        failed: external_exports.number().int().nonnegative(),
        skipped: external_exports.number().int().nonnegative().optional()
      }).optional(),
      progress_delta: external_exports.number().optional(),
      scope_delta: external_exports.number().optional(),
      token_usage: external_exports.object({
        input: external_exports.number().int().nonnegative().optional(),
        output: external_exports.number().int().nonnegative().optional()
      }).optional(),
      timestamp: external_exports.string().datetime({ offset: true }).or(external_exports.string()),
      state: RiskStateSchema.optional(),
      meta: external_exports.record(external_exports.unknown()).optional()
    });
    FeatureVectorSchema = external_exports.object({
      repeat_count: external_exports.number().optional(),
      progress_delta: external_exports.number().optional(),
      scope_delta: external_exports.number().optional(),
      test_delta: external_exports.number().optional(),
      revert_count: external_exports.number().optional(),
      oscillation_count: external_exports.number().optional(),
      same_file_count: external_exports.number().optional(),
      tool_repeat_count: external_exports.number().optional(),
      window_size: external_exports.number().optional(),
      extra: external_exports.record(external_exports.union([external_exports.string(), external_exports.number(), external_exports.boolean()])).optional()
    });
    SignatureSchema = external_exports.object({
      family: PatternFamilySchema,
      /** Canonical string FAMILY|feat=val|… */
      fingerprint: external_exports.string(),
      /** sha256 truncate of fingerprint */
      signature_hash: external_exports.string(),
      features: FeatureVectorSchema,
      severity: external_exports.number().min(0).max(1),
      session_id: external_exports.string(),
      emitted_at: external_exports.string(),
      event_ids: external_exports.array(external_exports.string()).optional()
    });
    OutcomeCountsSchema = external_exports.object({
      SUCCESS: external_exports.number().int().nonnegative().default(0),
      RECOVERED: external_exports.number().int().nonnegative().default(0),
      FAILED: external_exports.number().int().nonnegative().default(0),
      ABORTED: external_exports.number().int().nonnegative().default(0),
      USER_STOPPED: external_exports.number().int().nonnegative().default(0),
      UNKNOWN: external_exports.number().int().nonnegative().default(0)
    });
    PatternRecordSchema = external_exports.object({
      signature_hash: external_exports.string(),
      feature_vector: FeatureVectorSchema,
      occurrence_count: external_exports.number().int().nonnegative(),
      success_count: external_exports.number().int().nonnegative(),
      failure_count: external_exports.number().int().nonnegative(),
      confidence: external_exports.number().min(0).max(1),
      pattern_family: PatternFamilySchema,
      outcome_counts: OutcomeCountsSchema,
      updated_at: external_exports.string().optional()
    });
    RiskAssessmentSchema = external_exports.object({
      state: RiskStateSchema,
      score: external_exports.number().min(0).max(1),
      signatures: external_exports.array(SignatureSchema),
      reasons: external_exports.array(external_exports.string()),
      recommend_alert: external_exports.boolean(),
      recommend_pause: external_exports.boolean().default(false)
    });
    LlmProviderSchema = external_exports.enum([
      "openai",
      "anthropic",
      "openrouter",
      "gemini",
      "github",
      "kimi",
      "deepseek",
      "qwen",
      "qwen-local",
      "custom"
    ]);
    SettingsSchema = external_exports.object({
      privacy: PrivacyModeSchema.default("local_only"),
      mode: AuditorModeSchema.default("observe"),
      /** Guard pause is opt-in only; never default kill. */
      guard_pause_enabled: external_exports.boolean().default(false),
      llm_classifier_enabled: external_exports.boolean().default(false),
      /** Provider for independent Auditor AI (user's own API). */
      llm_provider: LlmProviderSchema.default("openai"),
      llm_model: external_exports.string().default("gpt-4o-mini"),
      /** Custom / OpenRouter / Azure-style base URL. API key never stored here. */
      llm_base_url: external_exports.string().optional(),
      pattern_store_path: external_exports.string().optional(),
      auditor_version: external_exports.string().default("0.1.0")
    });
    AnonymousSharePayloadSchema = external_exports.object({
      signature: external_exports.string(),
      signature_hash: external_exports.string(),
      features: FeatureVectorSchema,
      outcome: OutcomeSchema,
      auditor_version: external_exports.string()
      /** Explicitly forbidden fields are omitted by design. */
    });
  }
});

// ../protocol/src/index.ts
var init_src = __esm({
  "../protocol/src/index.ts"() {
    "use strict";
    init_schemas();
  }
});

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode = __toESM(require("vscode"));
var import_node_fs6 = require("node:fs");
var import_node_path4 = require("node:path");

// ../engine/src/signature/fingerprint.ts
var import_node_crypto = require("node:crypto");
function encodeFingerprint(family, features) {
  const parts = [family];
  const flat = {};
  for (const [k, v] of Object.entries(features)) {
    if (k === "extra" || v === void 0) continue;
    if (typeof v === "number" || typeof v === "string" || typeof v === "boolean") {
      flat[k] = v;
    }
  }
  if (features.extra) {
    for (const [k, v] of Object.entries(features.extra)) {
      flat[`extra.${k}`] = v;
    }
  }
  const keys = Object.keys(flat).sort();
  for (const k of keys) {
    const v = flat[k];
    const rendered = typeof v === "number" ? formatNumber(v) : String(v);
    parts.push(`${k}=${rendered}`);
  }
  const fingerprint = parts.join("|");
  const signature_hash = (0, import_node_crypto.createHash)("sha256").update(fingerprint).digest("hex").slice(0, 16);
  return { fingerprint, signature_hash };
}
function formatNumber(n) {
  if (Number.isInteger(n)) return String(n);
  return n.toFixed(4).replace(/\.?0+$/, "");
}

// ../engine/src/signature/detectors.ts
function emit(family, features, severity, ctx, event_ids) {
  const { fingerprint, signature_hash } = encodeFingerprint(family, features);
  return {
    family,
    fingerprint,
    signature_hash,
    features,
    severity,
    session_id: ctx.session_id,
    emitted_at: ctx.now ?? (/* @__PURE__ */ new Date()).toISOString(),
    event_ids
  };
}
function fileKey(e) {
  return e.file_path_hash ?? e.file_role;
}
var detectSameErrorRepeat = (ctx) => {
  const errors = ctx.events.filter((e) => e.error_fingerprint);
  if (errors.length < 3) return [];
  const counts = /* @__PURE__ */ new Map();
  for (const e of errors) {
    const fp = e.error_fingerprint;
    const cur = counts.get(fp) ?? { n: 0, ids: [] };
    cur.n += 1;
    cur.ids.push(e.id);
    counts.set(fp, cur);
  }
  const out = [];
  for (const [errFp, { n, ids }] of counts) {
    if (n < 3) continue;
    const severity = Math.min(1, 0.5 + (n - 3) * 0.15);
    out.push(
      emit(
        "SAME_ERROR_REPEAT",
        {
          repeat_count: n,
          progress_delta: avgProgress(ctx.events),
          extra: { error_class: hashShort(errFp) }
        },
        severity,
        ctx,
        ids
      )
    );
  }
  return out;
};
var detectSameFileOscillation = (ctx) => {
  const edits = ctx.events.filter(
    (e) => (e.action === "edit" || e.action === "write") && fileKey(e)
  );
  if (edits.length < 4) return [];
  const keys = edits.map((e) => fileKey(e));
  let oscillations = 0;
  for (let i = 2; i < keys.length; i++) {
    if (keys[i] === keys[i - 2] && keys[i] !== keys[i - 1]) {
      oscillations += 1;
    }
  }
  if (oscillations < 2) return [];
  const unique = new Set(keys);
  return [
    emit(
      "SAME_FILE_OSCILLATION",
      {
        oscillation_count: oscillations,
        same_file_count: unique.size,
        progress_delta: avgProgress(ctx.events)
      },
      Math.min(1, 0.55 + oscillations * 0.1),
      ctx,
      edits.map((e) => e.id)
    )
  ];
};
var detectEditRevertEdit = (ctx) => {
  const seq = ctx.events.filter(
    (e) => e.action === "edit" || e.action === "write" || e.action === "revert" || e.action === "delete"
  );
  let revert_count = 0;
  const ids = [];
  for (let i = 0; i < seq.length - 2; i++) {
    const a = seq[i];
    const b = seq[i + 1];
    const c = seq[i + 2];
    const fa = fileKey(a);
    const fc = fileKey(c);
    if (!fa || !fc) continue;
    if ((a.action === "edit" || a.action === "write") && b.action === "revert" && (c.action === "edit" || c.action === "write") && fa === fc) {
      revert_count += 1;
      ids.push(a.id, b.id, c.id);
    }
  }
  if (revert_count < 1) return [];
  return [
    emit(
      "EDIT_REVERT_EDIT",
      { revert_count, progress_delta: avgProgress(ctx.events) },
      Math.min(1, 0.6 + revert_count * 0.15),
      ctx,
      ids
    )
  ];
};
var detectNoProgress = (ctx) => {
  const window2 = ctx.events.slice(-20);
  if (window2.length < 8) return [];
  const progress = avgProgress(window2);
  const actionHeavy = window2.filter(
    (e) => ["edit", "write", "run_command", "tool_call", "search"].includes(e.action)
  ).length;
  if (actionHeavy < 6) return [];
  if (Math.abs(progress) > 0.05) return [];
  return [
    emit(
      "NO_PROGRESS",
      {
        progress_delta: progress,
        window_size: window2.length,
        repeat_count: actionHeavy
      },
      0.7,
      ctx,
      window2.map((e) => e.id)
    )
  ];
};
var detectScopeExpansion = (ctx) => {
  if (ctx.events.length < 6) return [];
  const scope = sumDelta(ctx.events, "scope_delta");
  const progress = sumDelta(ctx.events, "progress_delta");
  if (scope < 0.25) return [];
  if (progress > 0.1) return [];
  return [
    emit(
      "SCOPE_EXPANSION",
      { scope_delta: scope, progress_delta: progress },
      Math.min(1, 0.5 + scope * 0.5),
      ctx
    )
  ];
};
var detectTestRegression = (ctx) => {
  const tests = ctx.events.filter((e) => e.test_result);
  if (tests.length < 2) return [];
  let worstDelta = 0;
  for (let i = 1; i < tests.length; i++) {
    const prev = tests[i - 1].test_result.passed;
    const cur = tests[i].test_result.passed;
    const d = cur - prev;
    if (d < worstDelta) worstDelta = d;
  }
  if (worstDelta >= 0) return [];
  return [
    emit(
      "TEST_REGRESSION",
      { test_delta: worstDelta },
      Math.min(1, 0.65 + Math.abs(worstDelta) * 0.05),
      ctx,
      tests.map((e) => e.id)
    )
  ];
};
var detectRepeatedToolCall = (ctx) => {
  const tools = ctx.events.filter(
    (e) => e.tool && (e.action === "tool_call" || e.action === "run_command")
  );
  const counts = /* @__PURE__ */ new Map();
  for (const e of tools) {
    const key = `${e.tool}|${e.tool_args_fingerprint ?? ""}`;
    const cur = counts.get(key) ?? { n: 0, ids: [] };
    cur.n += 1;
    cur.ids.push(e.id);
    counts.set(key, cur);
  }
  const out = [];
  for (const [, { n, ids }] of counts) {
    if (n < 3) continue;
    out.push(
      emit(
        "REPEATED_TOOL_CALL",
        { tool_repeat_count: n, repeat_count: n },
        Math.min(1, 0.45 + (n - 3) * 0.12),
        ctx,
        ids
      )
    );
  }
  return out;
};
var ALL_DETECTORS = [
  detectSameErrorRepeat,
  detectSameFileOscillation,
  detectEditRevertEdit,
  detectNoProgress,
  detectScopeExpansion,
  detectTestRegression,
  detectRepeatedToolCall
];
function runDetectors(ctx) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const d of ALL_DETECTORS) {
    for (const sig of d(ctx)) {
      if (seen.has(sig.signature_hash)) continue;
      seen.add(sig.signature_hash);
      out.push(sig);
    }
  }
  return out;
}
function avgProgress(events) {
  const vals = events.map((e) => e.progress_delta).filter((v) => typeof v === "number");
  if (vals.length === 0) return 0;
  const raw = vals.reduce((a, b) => a + b, 0) / vals.length;
  return bucketDelta(raw);
}
function sumDelta(events, key) {
  const raw = events.reduce((acc, e) => acc + (e[key] ?? 0), 0);
  return bucketDelta(raw);
}
function bucketDelta(n) {
  if (Math.abs(n) < 0.05) return 0;
  return Math.round(n * 10) / 10;
}
function hashShort(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) | 0;
  return `e${(h >>> 0).toString(16).slice(0, 8)}`;
}

// ../engine/src/intervention/playbooks.ts
var INTERVENTION_PLAYBOOKS = {
  SAME_ERROR_REPEAT: {
    title: "Same error loop",
    steps: [
      "Stop re-applying the same edit against the identical error fingerprint.",
      "Re-state the failing acceptance criterion in one sentence.",
      "Run only the single failing test/command once, then replan."
    ]
  },
  SAME_FILE_OSCILLATION: {
    title: "File oscillation",
    steps: [
      "Pick one file as source of truth; avoid A\u2194B flip-flops.",
      "Diff the last two edits abstractly (intent), not by re-writing both.",
      "Checkpoint current approach and try an alternate strategy."
    ]
  },
  EDIT_REVERT_EDIT: {
    title: "Edit\u2013revert churn",
    steps: [
      "Pause before another revert; the prior edit may have been closer.",
      "Write a short hypothesis of the bug before the next edit.",
      "Prefer a smaller, test-backed change."
    ]
  },
  NO_PROGRESS: {
    title: "No measurable progress",
    steps: [
      "Define one verifiable progress signal (test green, error count down).",
      "Avoid broad refactors until that signal moves.",
      "Consider replan or ask the user for a narrower scope."
    ]
  },
  SCOPE_EXPANSION: {
    title: "Scope drift",
    steps: [
      "Return to the original task statement; list out-of-scope files.",
      "Do not expand into unrelated modules without evidence they block the goal.",
      "Request confirmation before migrations/redesigns."
    ]
  },
  TEST_REGRESSION: {
    title: "Test regression",
    steps: [
      "Restore or re-run previously passing tests before new features.",
      "Treat regressions as blocking \u2014 do not claim Done yet.",
      "Isolate the change that dropped the pass count."
    ]
  },
  REPEATED_TOOL_CALL: {
    title: "Repeated tool call",
    steps: [
      "Stop identical tool+args retries; change inputs or strategy.",
      "Cache/read prior tool output instead of re-invoking.",
      "Escalate to a different tool or human checkpoint."
    ]
  }
};
function playbookFor(family) {
  const p = INTERVENTION_PLAYBOOKS[family];
  return `[playbook:${family}] ${p.title} \u2014 ${p.steps[0]}`;
}
function playbooksForFamilies(families) {
  return [...new Set(families)].map(playbookFor);
}

// ../engine/src/rules/risk.ts
var FAMILY_WEIGHT = {
  SAME_ERROR_REPEAT: 0.9,
  SAME_FILE_OSCILLATION: 0.75,
  EDIT_REVERT_EDIT: 0.8,
  NO_PROGRESS: 0.7,
  SCOPE_EXPANSION: 0.65,
  TEST_REGRESSION: 0.85,
  REPEATED_TOOL_CALL: 0.55
};
function assessRisk(signatures, options = {}) {
  if (signatures.length === 0) {
    return {
      state: "HEALTHY",
      score: 0,
      signatures: [],
      reasons: [],
      recommend_alert: false,
      recommend_pause: false
    };
  }
  let score = 0;
  const reasons = [];
  for (const s of signatures) {
    const w = FAMILY_WEIGHT[s.family] ?? 0.5;
    const contrib = w * s.severity;
    score = Math.max(score, contrib);
    reasons.push(
      `${s.family} (severity=${s.severity.toFixed(2)}, weight=${w})`
    );
  }
  const families = new Set(signatures.map((s) => s.family));
  if (families.size >= 2) {
    score = Math.min(1, score + 0.08 * (families.size - 1));
    reasons.push(`multi_family=${families.size}`);
  }
  const minN = options.historyMinN ?? 3;
  for (const h of options.history ?? []) {
    if (h.n < minN || h.pFail === null) continue;
    const boost = Math.min(0.2, h.pFail * 0.25);
    score = Math.min(1, score + boost);
    reasons.push(h.label);
  }
  for (const line of playbooksForFamilies([...families])) {
    reasons.push(line);
  }
  const state = scoreToState(score);
  return {
    state,
    score,
    signatures,
    reasons,
    recommend_alert: state === "STAGNATING" || state === "LOST",
    recommend_pause: false
  };
}
function scoreToState(score) {
  if (score >= 0.85) return "LOST";
  if (score >= 0.65) return "STAGNATING";
  if (score >= 0.35) return "SUSPICIOUS";
  return "HEALTHY";
}
function priorsFromRecords(pairs) {
  const out = [];
  for (const { signature, record } of pairs) {
    if (!record || record.occurrence_count <= 0) continue;
    const pFail = record.failure_count / record.occurrence_count;
    const pct = Math.round(pFail * 100);
    out.push({
      signature_hash: signature.signature_hash,
      family: signature.family,
      n: record.occurrence_count,
      pFail,
      label: `Seen ${record.occurrence_count}\xD7; ~${pct}% FAILED (${signature.family})`
    });
  }
  return out;
}

// ../engine/src/state/machine.ts
var TrajectoryStateMachine = class {
  state = "HEALTHY";
  peakScore = 0;
  get current() {
    return this.state;
  }
  get peak() {
    return this.peakScore;
  }
  update(score) {
    this.peakScore = Math.max(this.peakScore, score);
    const next = scoreToState(this.peakScore);
    this.state = maxState(this.state, next);
    return this.state;
  }
  reset() {
    this.state = "HEALTHY";
    this.peakScore = 0;
  }
};
var ORDER = ["HEALTHY", "SUSPICIOUS", "STAGNATING", "LOST"];
function maxState(a, b) {
  return ORDER.indexOf(a) >= ORDER.indexOf(b) ? a : b;
}

// ../engine/src/claim/probes.ts
var import_node_child_process = require("node:child_process");
var import_node_fs = require("node:fs");
var import_node_path = require("node:path");
function probeGitClean(cwd = process.cwd()) {
  const notes = [];
  try {
    if (!(0, import_node_fs.existsSync)((0, import_node_path.resolve)(cwd, ".git"))) {
      notes.push("git: no .git directory \u2014 skipped");
      return { git_clean: false, notes };
    }
    const out = (0, import_node_child_process.execFileSync)("git", ["status", "--porcelain"], {
      cwd,
      encoding: "utf8",
      timeout: 1e4,
      stdio: ["ignore", "pipe", "pipe"]
    });
    const dirty = out.trim().length > 0;
    notes.push(
      dirty ? `git: dirty (${out.trim().split("\n").length} paths \u2014 names not logged)` : "git: clean"
    );
    return { git_clean: !dirty, notes };
  } catch (err) {
    notes.push(
      `git: probe failed (${err instanceof Error ? err.message : String(err)})`
    );
    return { git_clean: false, notes };
  }
}
function probeTests(cwd = process.cwd(), command) {
  const notes = [];
  const cmd = command?.trim();
  if (!cmd) {
    notes.push("tests: no --test-command provided \u2014 skipped");
    return { tests_passing: false, notes };
  }
  try {
    (0, import_node_child_process.execFileSync)("sh", ["-c", cmd], {
      cwd,
      encoding: "utf8",
      timeout: 12e4,
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, CI: "1" }
    });
    notes.push(`tests: command exited 0 (${cmd.slice(0, 80)})`);
    return { tests_passing: true, notes };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    notes.push(`tests: failed or non-zero exit (${msg.slice(0, 120)})`);
    return { tests_passing: false, notes };
  }
}
function gatherLocalEvidence(options) {
  const cwd = options?.cwd ?? process.cwd();
  const notes = [];
  let git_clean;
  let tests_passing;
  if (!options?.skipGit) {
    const g = probeGitClean(cwd);
    git_clean = g.git_clean;
    notes.push(...g.notes);
  }
  if (!options?.skipTests && options?.testCommand) {
    const t = probeTests(cwd, options.testCommand);
    tests_passing = t.tests_passing;
    notes.push(...t.notes);
  } else if (!options?.skipTests) {
    notes.push("tests: skipped (pass --test-command to enable)");
  }
  return { git_clean, tests_passing, notes };
}

// ../engine/src/claim/verify.ts
function verifyClaim(input) {
  const notes = [];
  let evidence = { ...input.evidence };
  let stub = true;
  if (input.probe) {
    const probed = gatherLocalEvidence({
      cwd: input.probe.cwd,
      testCommand: input.probe.testCommand
    });
    notes.push(...probed.notes);
    evidence = {
      ...evidence,
      git_clean: probed.git_clean ?? evidence.git_clean,
      tests_passing: probed.tests_passing ?? evidence.tests_passing
    };
    stub = false;
  } else {
    notes.push(
      "Local claim verify without live probes \u2014 pass probe:{cwd} or use Independent Audit."
    );
  }
  let score = 0;
  if (evidence?.tests_passing) {
    score += 0.4;
    notes.push("tests_passing=true");
  }
  if (evidence?.git_clean) {
    score += 0.2;
    notes.push("git_clean=true");
  }
  if (evidence?.checklist?.length) {
    score += Math.min(0.4, evidence.checklist.length * 0.1);
    notes.push(`checklist_items=${evidence.checklist.length}`);
  }
  return {
    verified: score >= 0.6,
    confidence: Math.min(1, score),
    notes,
    stub
  };
}

// ../engine/src/llm/classifier.ts
function classifyWithLlm(input) {
  const threshold = input.score_threshold ?? 0.65;
  const should = input.enabled && (input.risk_score === void 0 || input.risk_score >= threshold);
  if (!should) {
    return {
      used: false,
      strategy_change_likely: null,
      recovery_probability: null,
      notes: ["LLM classifier skipped (disabled or below threshold)"],
      stub: true
    };
  }
  return heuristicClassify(input.signatures, true);
}
async function classifyWithLlmAsync(input) {
  const threshold = input.score_threshold ?? 0.65;
  const should = input.enabled && (input.risk_score === void 0 || input.risk_score >= threshold);
  if (!should) {
    return {
      used: false,
      strategy_change_likely: null,
      recovery_probability: null,
      notes: ["LLM classifier skipped (disabled or below threshold)"],
      stub: true
    };
  }
  if (!input.client) {
    return heuristicClassify(input.signatures, true);
  }
  const payload = {
    task_summary: input.task_summary ?? "(not provided)",
    risk_score: input.risk_score ?? null,
    signatures: input.signatures.map((s) => ({
      family: s.family,
      severity: s.severity,
      fingerprint: s.fingerprint,
      features: s.features
    }))
  };
  const system = `You are an independent coding-agent Auditor AI. You are NOT the coding agent.
You only receive abstract behavioral signatures (no source code, no file contents, no prompts).
Decide if the agent is stuck, oscillating strategies, or making progress.
Reply with JSON only:
{"strategy_change_likely":boolean,"recovery_probability":number,"notes":string[]}`;
  try {
    const res = await input.client.chat([
      { role: "system", content: system },
      { role: "user", content: JSON.stringify(payload) }
    ]);
    const parsed = parseClassifierJson(res.content);
    return {
      used: true,
      strategy_change_likely: parsed.strategy_change_likely,
      recovery_probability: parsed.recovery_probability,
      notes: [
        `Auditor AI (${res.provider}/${res.model})`,
        ...parsed.notes
      ],
      stub: false,
      raw: res.content
    };
  } catch (err) {
    const fallback = heuristicClassify(input.signatures, false);
    fallback.notes.unshift(
      `Auditor AI call failed: ${err instanceof Error ? err.message : String(err)} \u2014 using heuristic`
    );
    return fallback;
  }
}
function heuristicClassify(signatures, stub) {
  const hasOscillation = signatures.some(
    (s) => s.family === "SAME_FILE_OSCILLATION" || s.family === "EDIT_REVERT_EDIT"
  );
  return {
    used: true,
    strategy_change_likely: hasOscillation,
    recovery_probability: hasOscillation ? 0.25 : 0.45,
    notes: [
      stub ? "Heuristic interpretation (no Auditor AI client configured)." : "Heuristic fallback.",
      hasOscillation ? "Oscillation suggests strategy change needed." : "No strong oscillation signal."
    ],
    stub
  };
}
function parseClassifierJson(text) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) {
    return {
      strategy_change_likely: null,
      recovery_probability: null,
      notes: [text.slice(0, 500)]
    };
  }
  try {
    const j = JSON.parse(match[0]);
    return {
      strategy_change_likely: typeof j.strategy_change_likely === "boolean" ? j.strategy_change_likely : null,
      recovery_probability: typeof j.recovery_probability === "number" ? j.recovery_probability : null,
      notes: Array.isArray(j.notes) ? j.notes.map(String) : []
    };
  } catch {
    return {
      strategy_change_likely: null,
      recovery_probability: null,
      notes: [text.slice(0, 500)]
    };
  }
}

// ../engine/src/llm/client.ts
var DEFAULT_BASE = {
  openai: "https://api.openai.com/v1",
  anthropic: "https://api.anthropic.com",
  openrouter: "https://openrouter.ai/api/v1",
  gemini: "https://generativelanguage.googleapis.com/v1beta/openai",
  github: "https://models.github.ai/inference",
  kimi: "https://api.moonshot.ai/v1",
  deepseek: "https://api.deepseek.com",
  qwen: "https://dashscope.aliyuncs.com/compatible-mode/v1",
  "qwen-local": "http://127.0.0.1:11434/v1",
  custom: "https://api.openai.com/v1"
};
function sanitizeErrorBody(body) {
  return body.replace(/sk-[a-zA-Z0-9_-]{10,}/g, "sk-***").replace(/Bearer\s+\S+/gi, "Bearer ***").slice(0, 240);
}
function isLocalAuditorProvider(config) {
  if (config.provider === "qwen-local") return true;
  const host = hostFromBaseUrl(config.baseUrl || DEFAULT_BASE[config.provider] || "");
  return host === "localhost" || host === "127.0.0.1" || host === "::1";
}
function createLlmClient(config) {
  let apiKey = config.apiKey?.trim() ?? "";
  if (!apiKey) {
    if (isLocalAuditorProvider(config)) apiKey = "local";
    else throw new Error("Auditor AI API key is required (separate from coding agent).");
  }
  const resolved = { ...config, apiKey };
  const fetchFn = config.fetchImpl ?? globalThis.fetch;
  if (!fetchFn) {
    throw new Error("fetch is not available in this runtime");
  }
  return {
    config: resolved,
    async chat(messages) {
      if (resolved.provider === "anthropic") {
        return chatAnthropic(resolved, messages, fetchFn);
      }
      return chatOpenAiCompatible(resolved, messages, fetchFn);
    }
  };
}
async function chatOpenAiCompatible(config, messages, fetchFn) {
  const base = (config.baseUrl || DEFAULT_BASE[config.provider] || DEFAULT_BASE.custom).replace(/\/$/, "");
  const extraHeaders = config.provider === "openrouter" ? { "HTTP-Referer": "https://github.com/agent-auditor", "X-Title": "Agent Auditor" } : config.provider === "github" ? { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" } : {};
  const res = await fetchFn(`${base}/chat/completions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${config.apiKey}`,
      ...extraHeaders
    },
    body: JSON.stringify({
      model: config.model,
      temperature: 0.2,
      messages
    })
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Auditor AI HTTP ${res.status}: ${sanitizeErrorBody(body)}`);
  }
  const json = await res.json();
  const content = json.choices?.[0]?.message?.content?.trim() ?? "";
  if (!content) throw new Error("Auditor AI returned empty content");
  return { content, provider: config.provider, model: config.model };
}
async function chatAnthropic(config, messages, fetchFn) {
  const base = (config.baseUrl ?? DEFAULT_BASE.anthropic).replace(/\/$/, "");
  const system = messages.filter((m) => m.role === "system").map((m) => m.content).join("\n");
  const rest = messages.filter((m) => m.role !== "system").map((m) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: m.content
  }));
  const res = await fetchFn(`${base}/v1/messages`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": config.apiKey,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: config.model,
      max_tokens: 1024,
      temperature: 0.2,
      system: system || void 0,
      messages: rest
    })
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Auditor AI HTTP ${res.status}: ${sanitizeErrorBody(body)}`);
  }
  const json = await res.json();
  const content = json.content?.filter((c) => c.type === "text").map((c) => c.text ?? "").join("\n").trim() ?? "";
  if (!content) throw new Error("Auditor AI returned empty content");
  return { content, provider: config.provider, model: config.model };
}

// ../engine/src/llm/independent-audit.ts
async function runIndependentAudit(input) {
  const local_claim = verifyClaim({
    claim: input.claim,
    evidence: input.evidence
  });
  const payload = {
    claim: input.claim,
    acceptance_criteria: input.acceptance_criteria ?? [],
    local_checklist: {
      verified: local_claim.verified,
      confidence: local_claim.confidence,
      notes: local_claim.notes.filter((n) => !n.includes("stub"))
    },
    risk: input.assessment ? {
      state: input.assessment.state,
      score: input.assessment.score,
      reasons: input.assessment.reasons
    } : null,
    signatures: (input.signatures ?? []).map((s) => ({
      family: s.family,
      severity: s.severity,
      features: s.features
    })),
    constraints: [
      "You are an independent Auditor \u2014 not the coding agent.",
      "No source code is provided; judge from abstract evidence only.",
      "Do not invent file contents."
    ]
  };
  const system = `You independently verify whether a coding agent completed its claim.
Reply JSON only:
{"verdict":"VERIFIED"|"PARTIAL"|"FAILED"|"UNCERTAIN","confidence":0-1,"notes":string[],"recovery_advice":string[]}`;
  try {
    const res = await input.client.chat([
      { role: "system", content: system },
      { role: "user", content: JSON.stringify(payload) }
    ]);
    const parsed = parseAuditJson(res.content);
    return {
      ...parsed,
      local_claim,
      stub: false,
      raw: res.content,
      notes: [`Auditor AI (${res.provider}/${res.model})`, ...parsed.notes]
    };
  } catch (err) {
    return {
      verdict: local_claim.verified ? "PARTIAL" : "UNCERTAIN",
      confidence: local_claim.confidence,
      notes: [
        `Auditor AI call failed: ${err instanceof Error ? err.message : String(err)}`,
        ...local_claim.notes
      ],
      recovery_advice: [
        "Configure Agent Auditor AI API key and retry Independent Audit."
      ],
      local_claim,
      stub: true
    };
  }
}
function parseAuditJson(text) {
  const match = text.match(/\{[\s\S]*\}/);
  const fallback = {
    verdict: "UNCERTAIN",
    confidence: 0.3,
    notes: [text.slice(0, 500)],
    recovery_advice: []
  };
  if (!match) return fallback;
  try {
    const j = JSON.parse(match[0]);
    const allowed = /* @__PURE__ */ new Set(["VERIFIED", "PARTIAL", "FAILED", "UNCERTAIN"]);
    const verdict = allowed.has(j.verdict ?? "") ? j.verdict : "UNCERTAIN";
    return {
      verdict,
      confidence: typeof j.confidence === "number" ? Math.max(0, Math.min(1, j.confidence)) : 0.3,
      notes: Array.isArray(j.notes) ? j.notes.map(String) : [],
      recovery_advice: Array.isArray(j.recovery_advice) ? j.recovery_advice.map(String) : []
    };
  } catch {
    return fallback;
  }
}

// ../engine/src/pipeline.ts
var AuditorPipeline = class {
  events = [];
  signatures = [];
  sm = new TrajectoryStateMachine();
  settings;
  llmClient;
  lastLlm;
  historyLookup;
  constructor(settings2 = {}) {
    this.settings = {
      privacy: settings2.privacy ?? "local_only",
      mode: settings2.mode ?? "observe",
      guard_pause_enabled: settings2.guard_pause_enabled ?? false,
      llm_classifier_enabled: settings2.llm_classifier_enabled ?? false,
      llm_provider: settings2.llm_provider ?? "openai",
      llm_model: settings2.llm_model ?? "gpt-4o-mini",
      llm_base_url: settings2.llm_base_url,
      pattern_store_path: settings2.pattern_store_path,
      auditor_version: settings2.auditor_version ?? "0.1.0"
    };
  }
  setLlmClient(client) {
    this.llmClient = client;
  }
  /** Wire local Pattern Store match() for live “Seen N; P% fail” risk. */
  setHistoryLookup(lookup) {
    this.historyLookup = lookup;
  }
  get trajectory() {
    return this.events;
  }
  get firedSignatures() {
    return this.signatures;
  }
  get lastLlmResult() {
    return this.lastLlm;
  }
  ingest(event) {
    this.events.push(event);
    return this.tickSync();
  }
  ingestMany(events) {
    this.events.push(...events);
    return this.tickSync();
  }
  async ingestAsync(event) {
    this.events.push(event);
    return this.tickAsync();
  }
  historyPriors() {
    if (!this.historyLookup) return [];
    return priorsFromRecords(
      this.signatures.map((signature) => ({
        signature,
        record: this.historyLookup(signature.signature_hash) ?? null
      }))
    );
  }
  computeSignatures() {
    const session_id = this.events.at(-1)?.session_id ?? this.events[0]?.session_id ?? "unknown";
    const fresh = runDetectors({ events: this.events, session_id });
    const byFamily = /* @__PURE__ */ new Map();
    for (const s of [...this.signatures, ...fresh]) {
      const prev = byFamily.get(s.family);
      if (!prev || s.severity >= prev.severity) byFamily.set(s.family, s);
    }
    this.signatures = [...byFamily.values()];
    const assessment = assessRisk(this.signatures, {
      history: this.historyPriors()
    });
    const state = this.sm.update(assessment.score);
    assessment.state = state;
    return assessment;
  }
  tickSync() {
    const assessment = this.computeSignatures();
    const llm = classifyWithLlm({
      signatures: this.signatures,
      enabled: this.settings.llm_classifier_enabled || this.settings.mode === "audit",
      risk_score: assessment.score
    });
    this.lastLlm = llm;
    return {
      signatures: this.signatures,
      assessment,
      state: assessment.state,
      alerts: this.buildAlerts(assessment),
      llm_notes: llm.notes
    };
  }
  async tickAsync() {
    const assessment = this.computeSignatures();
    const enabled = this.settings.llm_classifier_enabled || this.settings.mode === "audit";
    const llm = await classifyWithLlmAsync({
      signatures: this.signatures,
      enabled,
      risk_score: assessment.score,
      client: this.llmClient
    });
    this.lastLlm = llm;
    const alerts = this.buildAlerts(assessment);
    if (llm.used && !llm.stub) {
      alerts.push({
        level: assessment.state === "LOST" ? "critical" : "warn",
        message: `[auditor-ai] ${llm.notes.slice(0, 3).join(" | ")}`,
        assessment
      });
    }
    return {
      signatures: this.signatures,
      assessment,
      state: assessment.state,
      alerts,
      llm_notes: llm.notes
    };
  }
  buildAlerts(assessment) {
    const alerts = [];
    const mode = this.settings.mode;
    if (!assessment.recommend_alert && assessment.state === "HEALTHY") {
      return alerts;
    }
    if (assessment.state === "SUSPICIOUS") {
      alerts.push({
        level: "info",
        message: `[${mode}] Suspicious patterns: ${assessment.reasons.join("; ")}`,
        assessment
      });
    }
    if (assessment.state === "STAGNATING") {
      alerts.push({
        level: "warn",
        message: `[${mode}] Stagnating \u2014 consider strategy change. ${assessment.reasons[0] ?? ""}`,
        assessment
      });
    }
    if (assessment.state === "LOST") {
      alerts.push({
        level: "critical",
        message: `[${mode}] Agent appears lost. Recommend pause/review (never auto-edit).`,
        assessment
      });
      if (mode === "guard" && this.settings.guard_pause_enabled) {
        assessment.recommend_pause = true;
        alerts.push({
          level: "critical",
          message: "[guard] Pause recommended (opt-in stub \u2014 no process kill).",
          assessment
        });
      }
    }
    return alerts;
  }
  /** Post-hoc claim verify with optional live probes. */
  auditClaim(claim, evidence, probe) {
    return verifyClaim({ claim, evidence, probe });
  }
  /** Independent project/claim audit via user's separate Auditor AI. */
  async independentAudit(input) {
    if (!this.llmClient) {
      const local = verifyClaim({ claim: input.claim, evidence: input.evidence });
      return {
        verdict: "UNCERTAIN",
        confidence: local.confidence,
        notes: [
          "No Auditor AI client configured. Use Configure Auditor AI (separate API key).",
          ...local.notes
        ],
        recovery_advice: [
          "Set provider + model + API key in Agent Auditor settings."
        ],
        local_claim: local,
        stub: true
      };
    }
    const assessment = this.signatures.length > 0 ? assessRisk(this.signatures) : void 0;
    return runIndependentAudit({
      client: this.llmClient,
      claim: input.claim,
      acceptance_criteria: input.acceptance_criteria,
      signatures: this.signatures,
      assessment,
      evidence: input.evidence
    });
  }
  sessionOutcomeSummary(outcome) {
    return {
      signatures: this.signatures,
      outcome,
      privacy: this.settings.privacy
    };
  }
};

// ../adapters-cursor/src/normalize.ts
var import_node_crypto2 = require("node:crypto");
var import_node_fs2 = require("node:fs");
init_src();
function hashOpaque(value) {
  return (0, import_node_crypto2.createHash)("sha256").update(value).digest("hex").slice(0, 12);
}
function mapAction(raw) {
  const t = (raw.action ?? raw.type ?? raw.tool_name ?? raw.tool ?? "").toLowerCase();
  if (t.includes("revert") || t.includes("undo")) return "revert";
  if (t.includes("error") || raw.error) return "error";
  if (t.includes("test")) return "run_test";
  if (t.includes("bash") || t.includes("shell") || t.includes("command") || t.includes("terminal"))
    return "run_command";
  if (t.includes("search") || t.includes("grep") || t.includes("glob") || t.includes("semsearch"))
    return "search";
  if (t.includes("read")) return "read";
  if (t.includes("write") || t.includes("create")) return "write";
  if (t.includes("edit") || t.includes("strreplace") || t.includes("apply") || t.includes("composer"))
    return "edit";
  if (t.includes("delete") || t.includes("remove")) return "delete";
  if (t.includes("tool") || raw.tool_name || raw.tool) return "tool_call";
  if (t.includes("message") || t.includes("text") || t.includes("chat")) return "message";
  return "other";
}
function errorFingerprint(raw) {
  if (raw.error_fingerprint) return raw.error_fingerprint;
  if (!raw.error) return void 0;
  const msg = typeof raw.error === "string" ? raw.error : raw.error.message;
  if (!msg) return void 0;
  const normalized = msg.replace(/\/[\w./-]+/g, "<path>").replace(/:\d+:\d+/g, "").replace(/\d+/g, "N").trim().slice(0, 200);
  return hashOpaque(normalized);
}
function toolArgsFingerprint(raw) {
  if (raw.tool_args_fingerprint) return raw.tool_args_fingerprint;
  if (!raw.input) return void 0;
  const shape = Object.keys(raw.input).sort().map((k) => `${k}:${typeof raw.input[k]}`).join(",");
  return hashOpaque(shape);
}
function roleFromPath(path) {
  if (path.includes("test") || path.includes(".spec.")) return "test";
  if (path.endsWith(".md")) return "docs";
  if (path.includes("config")) return "config";
  return "source";
}
function normalizeCursorEvent(raw, defaults = {}) {
  const path = raw.path ?? raw.file;
  const tool = raw.tool_name ?? raw.tool;
  const action = mapAction(raw);
  const session_id = raw.session_id ?? raw.sessionId ?? defaults.session_id ?? "cursor-session";
  const scrubbed = { ...raw };
  delete scrubbed.thinking;
  delete scrubbed.reasoning;
  delete scrubbed.cot;
  delete scrubbed.content;
  delete scrubbed.prompt;
  const event = {
    id: raw.id ?? `cur_${hashOpaque(JSON.stringify(scrubbed).slice(0, 400))}_${Date.now()}`,
    agent: raw.agent ?? defaults.agent ?? "cursor",
    session_id,
    action,
    tool,
    tool_args_fingerprint: toolArgsFingerprint(raw),
    error_fingerprint: errorFingerprint(raw),
    file_path_hash: raw.file_path_hash ?? (path ? hashOpaque(path) : void 0),
    file_role: raw.file_role ?? (path ? roleFromPath(path) : void 0),
    test_result: raw.test_result ? {
      passed: raw.test_result.passed ?? 0,
      failed: raw.test_result.failed ?? 0,
      skipped: raw.test_result.skipped
    } : void 0,
    progress_delta: raw.progress_delta,
    scope_delta: raw.scope_delta,
    timestamp: raw.timestamp ?? (/* @__PURE__ */ new Date()).toISOString()
  };
  return AgentEventSchema.parse(event);
}
function normalizeCursorJsonlText(text, defaults = {}) {
  const events = [];
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const raw = JSON.parse(trimmed);
    events.push(normalizeCursorEvent(raw, defaults));
  }
  return events;
}
function normalizeCursorJsonl(filePath, defaults = {}) {
  if (!(0, import_node_fs2.existsSync)(filePath)) return [];
  return normalizeCursorJsonlText((0, import_node_fs2.readFileSync)(filePath, "utf8"), defaults);
}
function normalizeJsonlLine(line, defaults = {}) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) return null;
  const raw = JSON.parse(trimmed);
  return normalizeCursorEvent(raw, defaults);
}
var DEFAULT_EVENTS_PATH = ".auditor/events.jsonl";

// ../adapters-claude/src/normalize.ts
var import_node_crypto3 = require("node:crypto");
var import_node_fs3 = require("node:fs");
init_src();
function hashOpaque2(value) {
  return (0, import_node_crypto3.createHash)("sha256").update(value).digest("hex").slice(0, 12);
}
function mapAction2(raw) {
  const t = (raw.action ?? raw.type ?? raw.tool_name ?? raw.tool ?? "").toLowerCase();
  if (t.includes("revert") || t.includes("undo")) return "revert";
  if (t.includes("error") || raw.error) return "error";
  if (t.includes("test")) return "run_test";
  if (t.includes("bash") || t.includes("shell") || t.includes("command"))
    return "run_command";
  if (t.includes("search") || t.includes("grep") || t.includes("glob"))
    return "search";
  if (t.includes("read")) return "read";
  if (t.includes("write") || t.includes("create")) return "write";
  if (t.includes("edit") || t.includes("strreplace") || t.includes("apply"))
    return "edit";
  if (t.includes("delete") || t.includes("remove")) return "delete";
  if (t.includes("tool") || raw.tool_name || raw.tool) return "tool_call";
  if (t.includes("message") || t.includes("text")) return "message";
  return "other";
}
function errorFingerprint2(raw) {
  if (!raw.error) return void 0;
  const msg = typeof raw.error === "string" ? raw.error : raw.error.message;
  if (!msg) return void 0;
  const normalized = msg.replace(/\/[\w./-]+/g, "<path>").replace(/:\d+:\d+/g, "").replace(/\d+/g, "N").trim().slice(0, 200);
  return hashOpaque2(normalized);
}
function toolArgsFingerprint2(input) {
  if (!input) return void 0;
  const shape = Object.keys(input).sort().map((k) => `${k}:${typeof input[k]}`).join(",");
  return hashOpaque2(shape);
}
function normalizeClaudeEvent(raw, defaults = {}) {
  const path = raw.path ?? raw.file;
  const tool = raw.tool_name ?? raw.tool ?? raw.name;
  const action = mapAction2(raw);
  const session_id = raw.session_id ?? raw.sessionId ?? defaults.session_id ?? "session-unknown";
  const idSeed = raw.id ? raw.id : hashOpaque2(
    [
      session_id,
      action,
      tool ?? "",
      path ? hashOpaque2(path) : "",
      raw.timestamp ?? "",
      String(raw.progress_delta ?? ""),
      String(raw.scope_delta ?? "")
    ].join("|")
  );
  const event = {
    id: raw.id ?? `evt_${idSeed}`,
    agent: defaults.agent ?? "claude-code",
    session_id,
    action,
    tool,
    tool_args_fingerprint: toolArgsFingerprint2(raw.input),
    error_fingerprint: errorFingerprint2(raw),
    file_path_hash: path ? hashOpaque2(path) : void 0,
    file_role: path ? roleFromPath2(path) : void 0,
    test_result: raw.test_result ? {
      passed: raw.test_result.passed ?? 0,
      failed: raw.test_result.failed ?? 0,
      skipped: raw.test_result.skipped
    } : void 0,
    progress_delta: raw.progress_delta,
    scope_delta: raw.scope_delta,
    timestamp: raw.timestamp ?? (/* @__PURE__ */ new Date()).toISOString()
  };
  return AgentEventSchema.parse(event);
}
function roleFromPath2(path) {
  if (path.includes("test") || path.includes(".spec.")) return "test";
  if (path.endsWith(".md")) return "docs";
  if (path.includes("config")) return "config";
  return "source";
}
function normalizeClaudeJsonl(filePath, defaults = {}) {
  const text = (0, import_node_fs3.readFileSync)(filePath, "utf8");
  const events = [];
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const raw = JSON.parse(trimmed);
    events.push(normalizeClaudeEvent(raw, defaults));
  }
  return events;
}

// ../pattern-store/src/json-store.ts
var import_node_fs4 = require("node:fs");
var import_node_path2 = require("node:path");
var import_node_os = require("node:os");
init_src();
function defaultJsonPatternStorePath(projectLocal = false) {
  if (projectLocal) {
    return (0, import_node_path2.join)(process.cwd(), ".auditor", "patterns.json");
  }
  return (0, import_node_path2.join)((0, import_node_os.homedir)(), ".agent-auditor", "patterns.json");
}
var JsonPatternStore = class {
  path;
  data;
  constructor(dbPath) {
    this.path = dbPath ?? defaultJsonPatternStorePath(false);
    (0, import_node_fs4.mkdirSync)((0, import_node_path2.dirname)(this.path), { recursive: true });
    this.data = this.load();
  }
  close() {
    this.persist();
  }
  recordSession(signatures, outcome, _privacy = "local_only") {
    const results = [];
    for (const sig of signatures) {
      results.push(this.upsert(sig, outcome));
    }
    return results;
  }
  upsert(sig, outcome) {
    const existing = this.get(sig.signature_hash);
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const counts = existing?.outcome_counts ?? {
      SUCCESS: 0,
      RECOVERED: 0,
      FAILED: 0,
      ABORTED: 0,
      USER_STOPPED: 0,
      UNKNOWN: 0
    };
    counts[outcome] = (counts[outcome] ?? 0) + 1;
    const occurrence = (existing?.occurrence_count ?? 0) + 1;
    const success = (existing?.success_count ?? 0) + (outcome === "SUCCESS" || outcome === "RECOVERED" ? 1 : 0);
    const failure = (existing?.failure_count ?? 0) + (outcome === "FAILED" ? 1 : 0);
    const confidence = computeConfidence(occurrence, success, failure, counts);
    const record = PatternRecordSchema.parse({
      signature_hash: sig.signature_hash,
      feature_vector: sig.features,
      occurrence_count: occurrence,
      success_count: success,
      failure_count: failure,
      confidence,
      pattern_family: sig.family,
      outcome_counts: counts,
      updated_at: now
    });
    this.data.patterns[sig.signature_hash] = record;
    this.persist();
    return record;
  }
  get(signature_hash) {
    return this.data.patterns[signature_hash] ?? null;
  }
  match(signature_hash) {
    return this.get(signature_hash);
  }
  matchFamily(family) {
    return Object.values(this.data.patterns).filter(
      (p) => p.pattern_family === family
    );
  }
  list() {
    return Object.values(this.data.patterns).sort(
      (a, b) => b.occurrence_count - a.occurrence_count
    );
  }
  load() {
    if (!(0, import_node_fs4.existsSync)(this.path)) {
      return { version: 1, patterns: {} };
    }
    try {
      const raw = JSON.parse((0, import_node_fs4.readFileSync)(this.path, "utf8"));
      if (raw?.version === 1 && raw.patterns && typeof raw.patterns === "object") {
        return raw;
      }
    } catch {
    }
    return { version: 1, patterns: {} };
  }
  persist() {
    (0, import_node_fs4.writeFileSync)(this.path, JSON.stringify(this.data, null, 2));
  }
};
function estimateFailureProbability(record) {
  const n = record.occurrence_count;
  if (n <= 0) {
    return { n: 0, pFail: null, label: "No local history yet." };
  }
  const pFail = record.failure_count / n;
  const pct = Math.round(pFail * 100);
  return {
    n,
    pFail,
    label: `Pattern seen ${n}\xD7 locally; ~${pct}% ended FAILED (USER_STOPPED excluded from failure count).`
  };
}
function computeConfidence(occurrence, success, failure, counts) {
  if (occurrence === 0) return 0;
  const decisive = success + failure + counts.ABORTED;
  const ratio = decisive / occurrence;
  const volume = Math.min(1, occurrence / 10);
  return Math.round(Math.min(1, 0.3 + ratio * 0.4 + volume * 0.3) * 1e3) / 1e3;
}

// src/trustedSettings.ts
var DEFAULT_PROVIDER_HOSTS = {
  openai: ["api.openai.com"],
  anthropic: ["api.anthropic.com"],
  openrouter: ["openrouter.ai"],
  gemini: ["generativelanguage.googleapis.com"],
  github: ["models.github.ai", "models.inference.ai.azure.com"],
  kimi: ["api.moonshot.ai", "api.moonshot.cn"],
  deepseek: ["api.deepseek.com"],
  qwen: ["dashscope.aliyuncs.com", "dashscope-intl.aliyuncs.com"],
  "qwen-local": ["127.0.0.1", "localhost", "::1"]
};
function getTrustedConfigValue(cfg, key, fallback) {
  const insp = cfg.inspect(key);
  if (insp?.globalValue !== void 0) return insp.globalValue;
  if (insp?.defaultValue !== void 0) return insp.defaultValue;
  const merged = cfg.get(key);
  if (insp?.workspaceValue !== void 0 || insp?.workspaceFolderValue !== void 0) {
    return fallback;
  }
  return merged !== void 0 ? merged : fallback;
}
function resolveTrustedLlmSettings(cfg) {
  return {
    provider: getTrustedConfigValue(cfg, "llmProvider", "openai"),
    model: getTrustedConfigValue(cfg, "llmModel", "gpt-4o-mini"),
    baseUrl: getTrustedConfigValue(cfg, "llmBaseUrl", ""),
    llmEnabled: getTrustedConfigValue(cfg, "llmEnabled", false),
    allowNetworkAi: getTrustedConfigValue(cfg, "allowNetworkAi", false)
  };
}
function hostFromBaseUrl(baseUrl) {
  try {
    const u = new URL(baseUrl);
    return u.hostname.toLowerCase();
  } catch {
    return null;
  }
}
function isAllowedAuditorHost(provider, baseUrl, customConfirmed) {
  if (!baseUrl.trim()) {
    if (provider === "custom") {
      return { ok: false, reason: "Custom provider requires an explicit base URL." };
    }
    return { ok: true };
  }
  const host = hostFromBaseUrl(baseUrl);
  if (!host) return { ok: false, reason: "Invalid Auditor AI base URL." };
  if (provider === "custom") {
    if (!customConfirmed) {
      return {
        ok: false,
        reason: "Custom base URL must be confirmed (Global settings only)."
      };
    }
    return { ok: true };
  }
  const allowed = DEFAULT_PROVIDER_HOSTS[provider] ?? [];
  if (!allowed.length) {
    return {
      ok: false,
      reason: `Unknown Auditor AI provider "${provider}".`
    };
  }
  if (!allowed.some((h) => host === h || host.endsWith(`.${h}`))) {
    return {
      ok: false,
      reason: `Base URL host "${host}" is not allowlisted for ${provider}. Use Global custom provider + confirm.`
    };
  }
  return { ok: true };
}
function redactProviderError(message) {
  return message.replace(/sk-[a-zA-Z0-9_-]{10,}/g, "sk-***").replace(/Bearer\s+\S+/gi, "Bearer ***").replace(/x-api-key["']?\s*[:=]\s*["']?[\w-]+/gi, "x-api-key:***").slice(0, 240);
}

// src/discoverSources.ts
var import_node_fs5 = require("node:fs");
var import_node_path3 = require("node:path");
function discoverEventSources(workspaceRoot2) {
  const found = [];
  const direct = (0, import_node_path3.join)(workspaceRoot2, ".auditor", "events.jsonl");
  if ((0, import_node_fs5.existsSync)(direct)) found.push(direct);
  const agentDirs = [
    ".cursor",
    ".claude",
    ".claude-code",
    ".aider",
    ".continue",
    ".windsurf",
    ".cline",
    ".roo",
    ".codex",
    ".gemini",
    ".github/copilot",
    ".vscode"
  ];
  for (const rel of agentDirs) {
    const dir = (0, import_node_path3.join)(workspaceRoot2, rel);
    if (!(0, import_node_fs5.existsSync)(dir)) continue;
    try {
      found.push(...findNewestJsonl(dir, 3));
    } catch {
    }
  }
  return [...new Set(found)];
}
function inferAgentFromPath(filePath) {
  const p = String(filePath || "").replace(/\\/g, "/").toLowerCase();
  if (p.includes("/.claude")) return "claude-code";
  if (p.includes("/.aider")) return "aider";
  if (p.includes("/.continue")) return "continue";
  if (p.includes("/.windsurf")) return "windsurf";
  if (p.includes("/.cline") || p.includes("/.roo")) return "cline";
  if (p.includes("copilot")) return "github-copilot";
  if (p.includes("/.codex")) return "codex";
  if (p.includes("/.gemini")) return "gemini-cli";
  if (p.includes("/.cursor")) return "cursor";
  if (p.includes("/.auditor/")) return "generic";
  return "generic";
}
function findNewestJsonl(dir, maxDepth) {
  if (maxDepth < 0) return [];
  const out = [];
  let entries = [];
  try {
    entries = (0, import_node_fs5.readdirSync)(dir);
  } catch {
    return [];
  }
  for (const name of entries) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const p = (0, import_node_path3.join)(dir, name);
    let st;
    try {
      st = (0, import_node_fs5.statSync)(p);
    } catch {
      continue;
    }
    if (st.isFile() && name.endsWith(".jsonl")) {
      out.push({ path: p, mtime: st.mtimeMs });
    } else if (st.isDirectory()) {
      out.push(
        ...findNewestJsonl(p, maxDepth - 1).map((path) => ({
          path,
          mtime: (0, import_node_fs5.statSync)(path).mtimeMs
        }))
      );
    }
  }
  return out.sort((a, b) => b.mtime - a.mtime).slice(0, 3).map((x) => x.path);
}

// src/extension.ts
var PROVIDER_PRESETS = {
  openai: { model: "gpt-4o-mini", baseUrl: "", env: "OPENAI_API_KEY", extraEnv: [], needsBase: false, needsKey: true },
  anthropic: { model: "claude-sonnet-4-20250514", baseUrl: "", env: "ANTHROPIC_API_KEY", extraEnv: [], needsBase: false, needsKey: true },
  openrouter: { model: "openai/gpt-4o-mini", baseUrl: "https://openrouter.ai/api/v1", env: "OPENROUTER_API_KEY", extraEnv: [], needsBase: true, needsKey: true },
  gemini: { model: "gemini-2.5-flash", baseUrl: "", env: "GEMINI_API_KEY", extraEnv: ["GOOGLE_API_KEY"], needsBase: false, needsKey: true },
  github: { model: "openai/gpt-4o-mini", baseUrl: "", env: "GITHUB_TOKEN", extraEnv: ["GITHUB_MODELS_TOKEN"], needsBase: false, needsKey: true },
  kimi: { model: "kimi-k2-turbo-preview", baseUrl: "", env: "MOONSHOT_API_KEY", extraEnv: ["KIMI_API_KEY"], needsBase: false, needsKey: true },
  deepseek: { model: "deepseek-chat", baseUrl: "", env: "DEEPSEEK_API_KEY", extraEnv: [], needsBase: false, needsKey: true },
  qwen: { model: "qwen-plus", baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1", env: "DASHSCOPE_API_KEY", extraEnv: ["QWEN_API_KEY"], needsBase: false, needsKey: true },
  "qwen-local": { model: "qwen2.5", baseUrl: "http://127.0.0.1:11434/v1", env: "", extraEnv: [], needsBase: true, needsKey: false },
  custom: { model: "gpt-4o-mini", baseUrl: "https://api.openai.com/v1", env: "", extraEnv: [], needsBase: true, needsKey: true }
};
function envKeyForProvider(provider) {
  const preset = PROVIDER_PRESETS[provider];
  if (!preset) return (process.env.AGENT_AUDITOR_API_KEY || process.env.OPENAI_API_KEY || "").trim();
  if (process.env.AGENT_AUDITOR_API_KEY?.trim()) return process.env.AGENT_AUDITOR_API_KEY.trim();
  if (preset.env && process.env[preset.env]?.trim()) return process.env[preset.env].trim();
  for (const name of preset.extraEnv) {
    if (process.env[name]?.trim()) return process.env[name].trim();
  }
  return "";
}
var SECRET_API_KEY = "agentAuditor.apiKey";
var SECRET_CUSTOM_URL_CONFIRMED = "agentAuditor.customUrlConfirmed";
var output;
var statusBar;
var pipeline;
var lastResult;
var watcher;
var fileOffset = 0;
var partialLine = "";
var extContext;
var historyStore;
var liveDisposables = [];
var jsonlOffsets = /* @__PURE__ */ new Map();
var editDebounce = /* @__PURE__ */ new Map();
var lastLive = /* @__PURE__ */ new Map();
var diagTimer;
var compassView;
var lastCompassState = "idle";
var compassSnapshot = {
  state: "idle",
  signatures: [],
  events: [],
  eventCount: 0,
  score: void 0,
  watching: false
};
function fileBase(p) {
  const n = String(p || "").replace(/\\/g, "/");
  return n.split("/").filter(Boolean).pop() || "";
}
function postCompass() {
  compassView?.webview.postMessage(compassSnapshot);
}
function loadCompassHtml(context) {
  const p = (0, import_node_path4.join)(context.extensionPath, "media", "compass.html");
  const nonce = `${Date.now().toString(36)}${Math.random().toString(16).slice(2)}`;
  return (0, import_node_fs6.readFileSync)(p, "utf8").split("__NONCE__").join(nonce);
}
function registerCompass(context) {
  const provider = {
    resolveWebviewView(view) {
      compassView = view;
      view.webview.options = { enableScripts: true };
      view.webview.html = loadCompassHtml(context);
      view.webview.onDidReceiveMessage((msg) => {
        if (msg?.type === "ready") postCompass();
      });
      view.onDidDispose(() => {
        if (compassView === view) compassView = void 0;
      });
      postCompass();
    }
  };
  return vscode.window.registerWebviewViewProvider("agentAuditor.compass", provider, {
    webviewOptions: { retainContextWhenHidden: true }
  });
}
function showCompass() {
  void vscode.commands.executeCommand("agentAuditor.compass.focus");
}
function noteCompassEvent(rawLine, result) {
  let file = "";
  let action = "edit";
  let ts = new Date().toISOString();
  try {
    const raw = JSON.parse(String(rawLine || "").trim() || "{}");
    file = fileBase(raw.path || raw.file || "");
    action = String(raw.type || raw.action || "edit");
    ts = raw.timestamp || ts;
  } catch {
  }
  const sigs = result.signatures.map((s) => s.family);
  compassSnapshot.state = result.state;
  compassSnapshot.signatures = sigs;
  compassSnapshot.eventCount += 1;
  compassSnapshot.watching = true;
  compassSnapshot.score = result.assessment?.score;
  compassSnapshot.events.unshift({ t: ts, file, action, state: result.state });
  compassSnapshot.events = compassSnapshot.events.slice(0, 8);
  postCompass();
  if (result.state !== "HEALTHY" && lastCompassState === "HEALTHY") {
    showCompass();
  }
  lastCompassState = result.state;
}
async function enableAuditorNetwork() {
  const cfg = vscode.workspace.getConfiguration("agentAuditor");
  const trusted = resolveTrustedLlmSettings(cfg);
  if (!trusted.allowNetworkAi) {
    await cfg.update("allowNetworkAi", true, vscode.ConfigurationTarget.Global);
  }
  if (!trusted.llmEnabled) {
    await cfg.update("llmEnabled", true, vscode.ConfigurationTarget.Global);
  }
  if (trusted.provider === "custom" && trusted.baseUrl && extContext) {
    await extContext.secrets.store(SECRET_CUSTOM_URL_CONFIRMED, "1");
  }
}
async function resolveApiKey(context) {
  const fromSecret = (await context.secrets.get(SECRET_API_KEY) ?? "").trim();
  if (fromSecret) return fromSecret;
  const cfg = vscode.workspace.getConfiguration("agentAuditor");
  const fromSettings = String(getTrustedConfigValue(cfg, "apiKey", "") ?? "").trim();
  if (fromSettings) {
    await context.secrets.store(SECRET_API_KEY, fromSettings);
    output?.appendLine("Auditor AI key imported from User Settings into SecretStorage.");
    await enableAuditorNetwork();
    return fromSettings;
  }
  const s = settings();
  if (s.llmProvider === "qwen-local") {
    await enableAuditorNetwork();
    return "local";
  }
  const fromEnv = envKeyForProvider(s.llmProvider);
  if (fromEnv) {
    output?.appendLine("Auditor AI key loaded from environment.");
    await enableAuditorNetwork();
    return fromEnv;
  }
  return "";
}
async function refreshAuditorStatus(context) {
  if (!statusBar) return;
  const key = await resolveApiKey(context);
  if (key) {
    if (statusBar.command === "agentAuditor.configureAi" || /set API|idle/.test(statusBar.text)) {
      statusBar.command = "agentAuditor.showCompass";
      statusBar.text = "$(shield) Auditor: ready";
    }
    statusBar.tooltip = "Agent Auditor \u2014 API ready; separate from Cursor Agent";
  } else {
    statusBar.command = "agentAuditor.configureAi";
    statusBar.text = "$(key) Auditor: set API";
    statusBar.tooltip = "Click to connect Auditor AI (choose provider, then paste key)";
  }
}
async function promptApiIfMissing(context) {
  if (await resolveApiKey(context)) {
    await refreshAuditorStatus(context);
    return;
  }
  await refreshAuditorStatus(context);
  const pick = await vscode.window.showInformationMessage(
    "Agent Auditor: ch\u01b0a c\u00f3 API AI. Ch\u1ecdn h\u00e3ng r\u1ed3i d\u00e1n key (gi\u1ed1ng Connect Model).",
    "Connect Model",
    "Later"
  );
  if (pick === "Connect Model") await openConnectPanel(context);
}
function activate(context) {
  extContext = context;
  output = vscode.window.createOutputChannel("Agent Auditor");
  statusBar = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    100
  );
  statusBar.command = "agentAuditor.showCompass";
  statusBar.text = "$(shield) Auditor: idle";
  statusBar.tooltip = "Agent Auditor compass \u2014 bottom panel";
  statusBar.show();
  context.subscriptions.push(
    output,
    statusBar,
    registerCompass(context),
    vscode.commands.registerCommand(
      "agentAuditor.watchWorkspace",
      () => startWatch(context)
    ),
    vscode.commands.registerCommand("agentAuditor.stopWatch", () => stopWatch()),
    vscode.commands.registerCommand(
      "agentAuditor.installVendorHooks",
      () => installVendorHooks(context, { notify: true })
    ),
    vscode.commands.registerCommand(
      "agentAuditor.runFixtureDemo",
      () => runFixtureDemo(context)
    ),
    vscode.commands.registerCommand(
      "agentAuditor.showLastRisk",
      () => showLastRisk()
    ),
    vscode.commands.registerCommand(
      "agentAuditor.showCompass",
      () => showCompass()
    ),
    vscode.commands.registerCommand(
      "agentAuditor.privacySettings",
      () => privacySettings()
    ),
    vscode.commands.registerCommand(
      "agentAuditor.configureAi",
      () => openConnectPanel(context)
    ),
    vscode.commands.registerCommand(
      "agentAuditor.openAiSettings",
      () => openConnectPanel(context)
    ),
    vscode.commands.registerCommand(
      "agentAuditor.independentAudit",
      () => independentAudit(context)
    ),
    vscode.commands.registerCommand("agentAuditor.clearApiKey", async () => {
      await context.secrets.delete(SECRET_API_KEY);
      const cfg = vscode.workspace.getConfiguration("agentAuditor");
      await cfg.update("apiKey", "", vscode.ConfigurationTarget.Global);
      pipeline?.setLlmClient(void 0);
      await refreshAuditorStatus(context);
      vscode.window.showInformationMessage("Auditor AI API key cleared.");
    }),
    vscode.workspace.onDidChangeConfiguration(async (e) => {
      if (!e.affectsConfiguration("agentAuditor")) return;
      await resolveApiKey(context);
      await refreshAuditorStatus(context);
    }),
    vscode.workspace.onDidChangeWorkspaceFolders(() => {
      if (settings().autoStart === false) return;
      void startWatch(context, { silent: true });
    })
  );
  output.appendLine("Agent Auditor activated (local-first).");
  output.appendLine(
    "Auditor AI uses YOUR separate API key \u2014 not the coding agent's model."
  );
  output.appendLine(
    "Auto-watch: disk writes + vendor hooks (Cursor/Claude/Codex) as signatures (no code/prompt/CoT)."
  );
  void (async () => {
    if (settings().autoStart !== false && workspaceRoot()) {
      await startWatch(context, { silent: true });
    }
    await promptApiIfMissing(context);
  })();
}
function deactivate() {
  stopWatch();
  historyStore?.close();
  historyStore = void 0;
}
function settings() {
  const cfg = vscode.workspace.getConfiguration("agentAuditor");
  const privacy = cfg.get("privacy") ?? "local_only";
  const mode = cfg.get("mode") ?? "observe";
  const eventsFile = cfg.get("eventsFile") ?? DEFAULT_EVENTS_PATH;
  const guardPause = cfg.get("guardPause") ?? false;
  const autoDiscover = cfg.get("autoDiscover") ?? true;
  const autoStart = cfg.get("autoStart") ?? true;
  const diskWatch = cfg.get("diskWatch") ?? true;
  const vendorHooks = cfg.get("vendorHooks") ?? true;
  const trusted = resolveTrustedLlmSettings(cfg);
  return {
    privacy,
    mode,
    eventsFile,
    guardPause,
    llmProvider: trusted.provider,
    llmModel: trusted.model,
    llmBaseUrl: trusted.baseUrl,
    llmEnabled: trusted.llmEnabled,
    allowNetworkAi: trusted.allowNetworkAi,
    autoDiscover,
    autoStart,
    diskWatch,
    vendorHooks
  };
}
function workspaceRoot() {
  return vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
}
async function buildLlmClient(context) {
  const apiKey = await resolveApiKey(context);
  if (!apiKey) return void 0;
  const s = settings();
  if (!s.allowNetworkAi) return void 0;
  if (!s.llmEnabled && s.mode !== "audit") return void 0;
  const customConfirmed = await context.secrets.get(SECRET_CUSTOM_URL_CONFIRMED) === "1";
  const allow = isAllowedAuditorHost(
    s.llmProvider,
    s.llmBaseUrl,
    customConfirmed
  );
  if (!allow.ok) {
    output.appendLine(`Auditor AI blocked: ${allow.reason}`);
    return void 0;
  }
  return createLlmClient({
    provider: s.llmProvider,
    model: s.llmModel,
    apiKey,
    baseUrl: s.llmBaseUrl || void 0
  });
}
async function ensurePipeline(context) {
  const s = settings();
  const networkOk = s.allowNetworkAi;
  pipeline = new AuditorPipeline({
    privacy: s.privacy,
    mode: s.mode,
    guard_pause_enabled: s.guardPause,
    llm_classifier_enabled: networkOk && (s.llmEnabled || s.mode === "audit"),
    llm_provider: s.llmProvider,
    llm_model: s.llmModel,
    llm_base_url: s.llmBaseUrl || void 0
  });
  pipeline.setLlmClient(await buildLlmClient(context));
  if (!historyStore) {
    historyStore = await openLocalStore(workspaceRoot());
  }
  pipeline.setHistoryLookup((h) => historyStore.match(h));
  lastResult = void 0;
  return pipeline;
}
var connectPanel;
function loadConnectHtml(context) {
  const p = (0, import_node_path4.join)(context.extensionPath, "media", "connect.html");
  const nonce = `${Date.now().toString(36)}${Math.random().toString(16).slice(2)}`;
  return (0, import_node_fs6.readFileSync)(p, "utf8").split("__NONCE__").join(nonce);
}
async function listOllamaModels() {
  try {
    const r = await fetch("http://127.0.0.1:11434/api/tags");
    if (!r.ok) return { ok: false, message: "Ollama ch\u01b0a ch\u1ea1y (127.0.0.1:11434). M\u1edf app Ollama r\u1ed3i th\u1eed l\u1ea1i." };
    const j = await r.json();
    const models = (j.models || []).map((x) => x.name).filter(Boolean);
    if (!models.length) return { ok: false, message: "Ollama \u0111ang ch\u1ea1y nh\u01b0ng ch\u01b0a c\u00f3 model. Ch\u1ea1y: ollama pull qwen2.5" };
    return { ok: true, message: `T\u00ecm th\u1ea5y ${models.length} model tr\u00ean m\u00e1y.`, models };
  } catch {
    return { ok: false, message: "Ollama ch\u01b0a ch\u1ea1y (127.0.0.1:11434)." };
  }
}
async function checkProviderConnection(provider, apiKey) {
  const preset = PROVIDER_PRESETS[provider] || PROVIDER_PRESETS.custom;
  const base = (preset.baseUrl || DEFAULT_BASE[provider] || DEFAULT_BASE.custom).replace(/\/$/, "");
  if (provider === "anthropic") {
    const client = createLlmClient({ provider, apiKey, model: preset.model, baseUrl: base || void 0 });
    await client.chat([{ role: "user", content: "Reply OK" }]);
    return { ok: true, message: "Key h\u1ee3p l\u1ec7.", models: [preset.model] };
  }
  const headers = {
    authorization: `Bearer ${apiKey}`,
    "content-type": "application/json"
  };
  if (provider === "github") {
    headers.Accept = "application/vnd.github+json";
    headers["X-GitHub-Api-Version"] = "2022-11-28";
  }
  if (provider === "openrouter") {
    headers["HTTP-Referer"] = "https://github.com/agent-auditor";
    headers["X-Title"] = "Agent Auditor";
  }
  try {
    const r = await fetch(`${base}/models`, { headers });
    if (r.ok) {
      const j = await r.json();
      const models = (j.data || []).map((x) => x.id).filter(Boolean).slice(0, 50);
      return { ok: true, message: "Key h\u1ee3p l\u1ec7.", models: models.length ? models : [preset.model] };
    }
    if (r.status === 401 || r.status === 403) {
      return { ok: false, message: `Key kh\u00f4ng h\u1ee3p l\u1ec7 (HTTP ${r.status}).` };
    }
  } catch {
  }
  const client = createLlmClient({ provider, apiKey, model: preset.model, baseUrl: base || void 0 });
  await client.chat([{ role: "user", content: "Reply OK" }]);
  return { ok: true, message: "Key h\u1ee3p l\u1ec7.", models: [preset.model] };
}
async function saveConnectedProvider(context, msg) {
  const provider = msg.provider;
  const preset = PROVIDER_PRESETS[provider] || PROVIDER_PRESETS.custom;
  const model = String(msg.model || preset.model).trim();
  const baseUrl = provider === "qwen-local" ? DEFAULT_BASE["qwen-local"] : preset.baseUrl || "";
  const apiKey = provider === "qwen-local" ? "local" : String(msg.apiKey || "").trim();
  if (provider !== "qwen-local" && !apiKey) throw new Error("Thi\u1ebfu API key");
  const allow = isAllowedAuditorHost(provider, baseUrl, false);
  if (!allow.ok) throw new Error(allow.reason || "Base URL not allowed");
  const cfg = vscode.workspace.getConfiguration("agentAuditor");
  await cfg.update("llmProvider", provider, vscode.ConfigurationTarget.Global);
  await cfg.update("llmModel", model, vscode.ConfigurationTarget.Global);
  await cfg.update("llmBaseUrl", baseUrl, vscode.ConfigurationTarget.Global);
  await cfg.update("llmEnabled", true, vscode.ConfigurationTarget.Global);
  await cfg.update("allowNetworkAi", true, vscode.ConfigurationTarget.Global);
  await cfg.update("mode", "audit", vscode.ConfigurationTarget.Global);
  await context.secrets.store(SECRET_API_KEY, apiKey);
  await enableAuditorNetwork();
  pipeline?.setLlmClient(
    createLlmClient({
      provider,
      model,
      apiKey,
      baseUrl: baseUrl || void 0
    })
  );
}
async function openConnectPanel(context) {
  if (connectPanel) {
    connectPanel.reveal(vscode.ViewColumn.Active);
    const s = settings();
    connectPanel.webview.postMessage({
      type: "init",
      connected: await resolveApiKey(context) ? s.llmProvider : ""
    });
    return;
  }
  connectPanel = vscode.window.createWebviewPanel(
    "agentAuditor.connect",
    "CONNECT MODEL",
    vscode.ViewColumn.Active,
    {
      enableScripts: true,
      retainContextWhenHidden: true,
      localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, "media")]
    }
  );
  connectPanel.webview.html = loadConnectHtml(context);
  connectPanel.onDidDispose(() => {
    connectPanel = void 0;
  });
  connectPanel.webview.onDidReceiveMessage(async (msg) => {
    try {
      if (msg.type === "close") {
        connectPanel?.dispose();
        return;
      }
      if (msg.type === "open" && msg.url) {
        await vscode.env.openExternal(vscode.Uri.parse(msg.url));
        return;
      }
      if (msg.type === "listOllama") {
        const result = await listOllamaModels();
        connectPanel?.webview.postMessage({ type: "checkResult", ...result });
        return;
      }
      if (msg.type === "check") {
        const result = await checkProviderConnection(msg.provider, msg.apiKey);
        connectPanel?.webview.postMessage({
          type: "checkResult",
          ...result,
          keepKey: msg.apiKey
        });
        return;
      }
      if (msg.type === "save") {
        await saveConnectedProvider(context, msg);
        connectPanel?.webview.postMessage({
          type: "saved",
          provider: msg.provider,
          model: msg.model
        });
        vscode.window.showInformationMessage(
          `Auditor AI connected: ${msg.provider}/${msg.model}`
        );
        await refreshAuditorStatus(context);
      }
    } catch (err) {
      connectPanel?.webview.postMessage({
        type: "checkResult",
        ok: false,
        message: redactProviderError(err instanceof Error ? err.message : String(err))
      });
    }
  });
  const s = settings();
  const connected = await resolveApiKey(context) ? s.llmProvider : "";
  setTimeout(() => {
    connectPanel?.webview.postMessage({ type: "init", connected });
  }, 80);
}
async function configureAuditorAi(context) {
  const allowNet = await vscode.window.showWarningMessage(
    "Auditor AI calls YOUR separate API over the network. This is independent of privacy=local_only (which only blocks pattern telemetry). Continue?",
    { modal: true },
    "Allow network to provider",
    "Cancel"
  );
  if (allowNet !== "Allow network to provider") return;
  const provider = await vscode.window.showQuickPick(
    [
      { label: "OpenAI", id: "openai" },
      { label: "Anthropic", id: "anthropic" },
      { label: "OpenRouter", id: "openrouter" },
      { label: "Google Gemini", id: "gemini" },
      { label: "GitHub Models", id: "github" },
      { label: "Kimi / Moonshot", id: "kimi" },
      { label: "DeepSeek", id: "deepseek" },
      { label: "Qwen (DashScope)", id: "qwen" },
      { label: "Qwen local (Ollama / LM Studio)", id: "qwen-local" },
      { label: "Custom OpenAI-compatible", id: "custom" }
    ],
    { title: "Auditor AI provider (separate from coding agent)" }
  );
  if (!provider) return;
  const preset = PROVIDER_PRESETS[provider.id] ?? PROVIDER_PRESETS.custom;
  const model = await vscode.window.showInputBox({
    title: "Auditor AI model",
    value: preset.model,
    prompt: "Model id for the independent Auditor AI"
  });
  if (!model) return;
  let baseUrl = preset.baseUrl || "";
  let customConfirmed = false;
  if (preset.needsBase) {
    baseUrl = await vscode.window.showInputBox({
      title: "Base URL (saved to Global user settings only)",
      value: baseUrl || (provider.id === "qwen-local" ? "http://127.0.0.1:11434/v1" : "https://api.openai.com/v1"),
      prompt: provider.id === "qwen-local" ? "Ollama: http://127.0.0.1:11434/v1  |  LM Studio: http://127.0.0.1:1234/v1" : "OpenAI-compatible base URL"
    }) ?? "";
  }
  if (provider.id === "custom") {
    const conf = await vscode.window.showWarningMessage(
      `Confirm custom Auditor AI host?
${baseUrl}
API key will be sent only to this host.`,
      { modal: true },
      "Confirm custom host"
    );
    if (conf !== "Confirm custom host") return;
    customConfirmed = true;
  }
  const allow = isAllowedAuditorHost(
    provider.id,
    baseUrl,
    customConfirmed
  );
  if (!allow.ok) {
    vscode.window.showErrorMessage(allow.reason ?? "Base URL not allowed");
    return;
  }
  let apiKey = "local";
  if (preset.needsKey) {
    apiKey = await vscode.window.showInputBox({
      title: "Auditor AI API key",
      password: true,
      prompt: "Stored in SecretStorage only. Workspace settings cannot redirect this key.",
      ignoreFocusOut: true
    }) ?? "";
    if (!apiKey) return;
  } else {
    const optionalKey = await vscode.window.showInputBox({
      title: "API key (optional for local Qwen)",
      password: true,
      prompt: "Ollama / LM Studio: leave empty. Other local servers: paste if required.",
      ignoreFocusOut: true
    });
    apiKey = optionalKey?.trim() || "local";
  }
  const cfg = vscode.workspace.getConfiguration("agentAuditor");
  await cfg.update("llmProvider", provider.id, vscode.ConfigurationTarget.Global);
  await cfg.update("llmModel", model, vscode.ConfigurationTarget.Global);
  await cfg.update("llmBaseUrl", baseUrl, vscode.ConfigurationTarget.Global);
  await cfg.update("llmEnabled", true, vscode.ConfigurationTarget.Global);
  await cfg.update("allowNetworkAi", true, vscode.ConfigurationTarget.Global);
  await context.secrets.store(SECRET_API_KEY, apiKey);
  if (customConfirmed) {
    await context.secrets.store(SECRET_CUSTOM_URL_CONFIRMED, "1");
  } else {
    await context.secrets.delete(SECRET_CUSTOM_URL_CONFIRMED);
  }
  try {
    pipeline?.setLlmClient(
      createLlmClient({
        provider: provider.id,
        model,
        apiKey,
        baseUrl: baseUrl || void 0
      })
    );
  } catch (err) {
    vscode.window.showErrorMessage(
      redactProviderError(err instanceof Error ? err.message : String(err))
    );
    return;
  }
  output.appendLine(
    `Auditor AI configured (Global): ${provider.id}/${model}; allowNetworkAi=true.`
  );
  vscode.window.showInformationMessage(
    `Auditor AI ready (${provider.label}). Set mode to Audit or run Independent Audit.`
  );
  await refreshAuditorStatus(context);
}
async function independentAudit(context) {
  const pipe = await ensurePipeline(context);
  const apiKey = await resolveApiKey(context);
  if (!apiKey) {
    const go = await vscode.window.showWarningMessage(
      "Configure a separate Auditor AI API key first.",
      "Connect Model"
    );
    if (go === "Connect Model") await openConnectPanel(context);
    return;
  }
  pipe.setLlmClient(await buildLlmClient(context));
  const claim = await vscode.window.showInputBox({
    title: "Independent Audit \u2014 claim / task",
    prompt: "What did the coding agent claim to finish? (No code pasted here is required.)",
    placeHolder: "e.g. Implemented OAuth login with refresh tokens",
    ignoreFocusOut: true
  });
  if (!claim) return;
  const acRaw = await vscode.window.showInputBox({
    title: "Acceptance criteria (optional, comma-separated)",
    placeHolder: "login works, refresh token, logout invalidates"
  });
  const acceptance_criteria = acRaw ? acRaw.split(",").map((s) => s.trim()).filter(Boolean) : void 0;
  output.show(true);
  output.appendLine(`\u2500\u2500 Independent Audit (Auditor AI) \u2500\u2500`);
  output.appendLine(`claim: ${claim}`);
  vscode.window.setStatusBarMessage("$(loading~spin) Auditor AI\u2026", 15e3);
  try {
    const result = await pipe.independentAudit({
      claim,
      acceptance_criteria
    });
    output.appendLine(
      `verdict=${result.verdict} confidence=${result.confidence.toFixed(2)} stub=${result.stub}`
    );
    for (const n of result.notes) output.appendLine(`  \u2022 ${n}`);
    for (const a of result.recovery_advice) output.appendLine(`  \u2192 ${a}`);
    vscode.window.showInformationMessage(
      `Independent Audit: ${result.verdict} (${(result.confidence * 100).toFixed(0)}%)`
    );
  } catch (err) {
    const msg = redactProviderError(
      err instanceof Error ? err.message : String(err)
    );
    output.appendLine(`ERROR: ${msg}`);
    vscode.window.showErrorMessage(`Auditor AI failed: ${msg}`);
  }
}
function vendorHookCommand(scriptAbs) {
  const q = scriptAbs.replace(/"/g, '\\"');
  return `node "${q}"`;
}
function hookAlreadyListed(arr, marker) {
  return (arr || []).some((h) => {
    const cmd = typeof h === "string" ? h : h?.command || h?.hooks?.[0]?.command || "";
    return String(cmd).includes(marker);
  });
}
function writeMergedJson(abs, data) {
  (0, import_node_fs6.mkdirSync)((0, import_node_path4.dirname)(abs), { recursive: true });
  (0, import_node_fs6.writeFileSync)(abs, `${JSON.stringify(data, null, 2)}\n`);
}
function readJsonOr(abs, fallback) {
  try {
    if (!(0, import_node_fs6.existsSync)(abs)) return fallback;
    return JSON.parse((0, import_node_fs6.readFileSync)(abs, "utf8") || "null") || fallback;
  } catch {
    return fallback;
  }
}
function installVendorHooks(context, opts = {}) {
  const src = (0, import_node_path4.join)(context.extensionPath, "hooks", "append-event.cjs");
  const dest = (0, import_node_path4.join)((0, import_node_os.homedir)(), ".agent-auditor", "append-event.cjs");
  try {
    (0, import_node_fs6.mkdirSync)((0, import_node_path4.dirname)(dest), { recursive: true });
    if ((0, import_node_fs6.existsSync)(src)) (0, import_node_fs6.copyFileSync)(src, dest);
  } catch (err) {
    const msg = `Vendor hooks: copy failed (${err instanceof Error ? err.message : String(err)})`;
    if (opts.notify) vscode.window.showErrorMessage(msg);
    return msg;
  }
  const cmd = vendorHookCommand(dest);
  const marker = "agent-auditor";
  const home = (0, import_node_os.homedir)();
  const notes = [];
  const cursorFile = (0, import_node_path4.join)(home, ".cursor", "hooks.json");
  const cursor = readJsonOr(cursorFile, { version: 1, hooks: {} });
  cursor.version = cursor.version || 1;
  cursor.hooks = cursor.hooks || {};
  cursor.hooks.afterFileEdit = cursor.hooks.afterFileEdit || [];
  cursor.hooks.postToolUseFailure = cursor.hooks.postToolUseFailure || [];
  let cursorChanged = false;
  if (!hookAlreadyListed(cursor.hooks.afterFileEdit, marker)) {
    cursor.hooks.afterFileEdit.push({ command: cmd });
    cursorChanged = true;
  }
  if (!hookAlreadyListed(cursor.hooks.postToolUseFailure, marker)) {
    cursor.hooks.postToolUseFailure.push({ command: cmd });
    cursorChanged = true;
  }
  if (cursorChanged) {
    writeMergedJson(cursorFile, cursor);
    notes.push("Cursor ~/.cursor/hooks.json (afterFileEdit)");
  }
  const codexFile = (0, import_node_path4.join)(home, ".codex", "hooks.json");
  const codex = readJsonOr(codexFile, { hooks: {} });
  codex.hooks = codex.hooks || {};
  codex.hooks.PostToolUse = codex.hooks.PostToolUse || [];
  let codexChanged = false;
  if (!hookAlreadyListed(codex.hooks.PostToolUse, marker)) {
    codex.hooks.PostToolUse.push({
      matcher: "apply_patch|Edit|Write",
      hooks: [{ type: "command", command: cmd, timeout: 8, statusMessage: "Auditor signature" }]
    });
    codexChanged = true;
  }
  if (codexChanged) {
    if (!codex.description) {
      codex.description = "Agent Auditor signatures only (no patch/prompt body).";
    }
    writeMergedJson(codexFile, codex);
    notes.push("ChatGPT Codex ~/.codex/hooks.json (PostToolUse apply_patch)");
  }
  const claudeFile = (0, import_node_path4.join)(home, ".claude", "settings.json");
  const claude = readJsonOr(claudeFile, {});
  claude.hooks = claude.hooks || {};
  claude.hooks.PostToolUse = claude.hooks.PostToolUse || [];
  claude.hooks.PostToolUseFailure = claude.hooks.PostToolUseFailure || [];
  let claudeChanged = false;
  if (!hookAlreadyListed(claude.hooks.PostToolUse, marker)) {
    claude.hooks.PostToolUse.push({
      matcher: "Edit|Write|MultiEdit",
      hooks: [{ type: "command", command: cmd, timeout: 10 }]
    });
    claudeChanged = true;
  }
  if (!hookAlreadyListed(claude.hooks.PostToolUseFailure, marker)) {
    claude.hooks.PostToolUseFailure.push({
      matcher: "Edit|Write|MultiEdit",
      hooks: [{ type: "command", command: cmd, timeout: 10 }]
    });
    claudeChanged = true;
  }
  if (claudeChanged) {
    writeMergedJson(claudeFile, claude);
    notes.push("Claude Code ~/.claude/settings.json (PostToolUse Edit|Write)");
  }
  const line = notes.length ? `Vendor hooks ready: ${notes.join(" · ")}` : "Vendor hooks already installed (Cursor / Claude / Codex).";
  if (opts.notify) {
    vscode.window.showInformationMessage(
      `${line} Codex: open /hooks and trust. ChatGPT web (no Codex) has no workspace file loop.`
    );
  }
  return line;
}
async function startWatch(context, opts = {}) {
  const root = workspaceRoot();
  if (!root) {
    if (!opts.silent) {
      vscode.window.showErrorMessage("Agent Auditor: open a workspace folder first.");
    }
    return;
  }
  stopWatch();
  const s = settings();
  const rel = s.eventsFile || DEFAULT_EVENTS_PATH;
  const abs = (0, import_node_path4.resolve)(root, rel);
  (0, import_node_fs6.mkdirSync)((0, import_node_path4.dirname)(abs), { recursive: true });
  if (!(0, import_node_fs6.existsSync)(abs)) {
    (0, import_node_fs6.writeFileSync)(abs, "");
    output.appendLine(`Created ${abs}`);
  }
  await ensurePipeline(context);
  fileOffset = 0;
  partialLine = "";
  jsonlOffsets.clear();
  if (!opts.silent) output.show(true);
  output.appendLine(
    `\u2500\u2500 Auto-watch ${abs} (privacy=${s.privacy}, mode=${s.mode}, llm=${s.llmEnabled}, allowNetwork=${s.allowNetworkAi}) \u2500\u2500`
  );
  const discovered = discoverEventSources(root);
  if (discovered.length) {
    output.appendLine(
      `Discovered local event sources (normalize-only; prompts/CoT dropped):`
    );
    for (const p of discovered) output.appendLine(`  \u2022 ${p}`);
  }
  compassSnapshot = {
    state: "HEALTHY",
    signatures: [],
    events: [],
    eventCount: 0,
    score: void 0,
    watching: true
  };
  lastCompassState = "HEALTHY";
  postCompass();
  updateStatus("HEALTHY", []);
  await ingestFileFrom(abs, 0, context);
  watcher = vscode.workspace.createFileSystemWatcher(
    new vscode.RelativePattern(root, rel)
  );
  const onChange = () => {
    void ingestFileFrom(abs, fileOffset, context);
  };
  watcher.onDidChange(onChange);
  watcher.onDidCreate(onChange);
  if (s.autoDiscover) {
    const extras = discovered.filter((p) => p !== abs);
    for (const secondary of extras) {
      output.appendLine(
        `Auto-discover ingest (${inferAgentFromPath(secondary)}): ${secondary}`
      );
      await ingestFileOnce(secondary, context);
      try {
        jsonlOffsets.set(secondary, (0, import_node_fs6.readFileSync)(secondary, "utf8").length);
      } catch {
        jsonlOffsets.set(secondary, 0);
      }
    }
  }
  hookLiveActivity(context, root);
  if (s.vendorHooks !== false) {
    const hookNote = installVendorHooks(context, { notify: false });
    if (hookNote) output.appendLine(hookNote);
  }
  if (!opts.silent) {
    vscode.window.showInformationMessage(
      `Agent Auditor watching ${rel} (local only).`
    );
  } else {
    statusBar.tooltip = "Agent Auditor auto-watch \u2014 signatures only; no code/prompt/CoT";
  }
}
function stopWatch() {
  watcher?.dispose();
  watcher = void 0;
  for (const d of liveDisposables) d.dispose();
  liveDisposables = [];
  for (const t of editDebounce.values()) clearTimeout(t);
  editDebounce.clear();
  lastLive.clear();
  if (diagTimer) clearTimeout(diagTimer);
  diagTimer = void 0;
  jsonlOffsets.clear();
}
function shouldIgnorePath(fsPath) {
  const p = String(fsPath || "").replace(/\\/g, "/").toLowerCase();
  if (!p) return true;
  const skip = [
    "/node_modules/",
    "/.git/",
    "/.auditor/",
    "/.next/",
    "/dist/",
    "/out/",
    "/coverage/",
    "/.venv/",
    "/__pycache__/",
    "/.cursor/",
    "/.claude/",
    "/.codex/",
    "/.turbo/",
    "/.cache/",
    "/build/"
  ];
  if (skip.some((s) => p.includes(s))) return true;
  if (/\.(png|jpe?g|gif|webp|ico|woff2?|lock|vsix|map|bin)$/.test(p)) return true;
  return false;
}
function eventsFileAbs() {
  const root = workspaceRoot();
  if (!root) return "";
  return (0, import_node_path4.resolve)(root, settings().eventsFile || DEFAULT_EVENTS_PATH);
}
function appendLiveEvent(raw) {
  const abs = eventsFileAbs();
  if (!abs) return;
  const key = `${raw.type}:${raw.path || ""}`;
  const now = Date.now();
  const prev = lastLive.get(key);
  if (prev && now - prev < 1500) return;
  lastLive.set(key, now);
  try {
    (0, import_node_fs6.mkdirSync)((0, import_node_path4.dirname)(abs), { recursive: true });
    const row = {
      id: raw.id || `live_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
      type: raw.type,
      path: raw.path,
      error: raw.error,
      timestamp: raw.timestamp || new Date().toISOString(),
      progress_delta: raw.progress_delta ?? 0,
      agent: raw.agent || "cursor"
    };
    (0, import_node_fs6.appendFileSync)(abs, `${JSON.stringify(row)}\n`);
  } catch (err) {
    output?.appendLine(`live-event skip: ${err instanceof Error ? err.message : String(err)}`);
  }
}
function scheduleEdit(fsPath, type) {
  const prev = editDebounce.get(fsPath);
  if (prev) clearTimeout(prev);
  editDebounce.set(
    fsPath,
    setTimeout(() => {
      editDebounce.delete(fsPath);
      appendLiveEvent({ type, path: fsPath, timestamp: new Date().toISOString() });
    }, 700)
  );
}
function hookLiveActivity(context, root) {
  liveDisposables.push(
    vscode.workspace.onDidSaveTextDocument((doc) => {
      if (doc.uri.scheme !== "file") return;
      if (shouldIgnorePath(doc.uri.fsPath)) return;
      scheduleEdit(doc.uri.fsPath, "edit");
    })
  );
  liveDisposables.push(
    vscode.workspace.onDidCreateFiles((e) => {
      for (const f of e.files) {
        if (f.scheme !== "file" || shouldIgnorePath(f.fsPath)) continue;
        appendLiveEvent({ type: "write", path: f.fsPath });
      }
    })
  );
  liveDisposables.push(
    vscode.workspace.onDidDeleteFiles((e) => {
      for (const f of e.files) {
        if (f.scheme !== "file" || shouldIgnorePath(f.fsPath)) continue;
        appendLiveEvent({ type: "delete", path: f.fsPath });
      }
    })
  );
  if (typeof vscode.workspace.onDidRenameFiles === "function") {
    liveDisposables.push(
      vscode.workspace.onDidRenameFiles((e) => {
        for (const f of e.files) {
          if (f.newUri?.scheme === "file" && !shouldIgnorePath(f.newUri.fsPath)) {
            appendLiveEvent({ type: "write", path: f.newUri.fsPath });
          }
          if (f.oldUri?.scheme === "file" && !shouldIgnorePath(f.oldUri.fsPath)) {
            appendLiveEvent({ type: "delete", path: f.oldUri.fsPath });
          }
        }
      })
    );
  }
  if (settings().diskWatch !== false) {
    const disk = vscode.workspace.createFileSystemWatcher(
      new vscode.RelativePattern(root, "**/*")
    );
    disk.onDidChange((uri) => {
      if (uri.scheme !== "file" || shouldIgnorePath(uri.fsPath)) return;
      scheduleEdit(uri.fsPath, "edit");
    });
    disk.onDidCreate((uri) => {
      if (uri.scheme !== "file" || shouldIgnorePath(uri.fsPath)) return;
      scheduleEdit(uri.fsPath, "write");
    });
    disk.onDidDelete((uri) => {
      if (uri.scheme !== "file" || shouldIgnorePath(uri.fsPath)) return;
      scheduleEdit(uri.fsPath, "delete");
    });
    liveDisposables.push(disk);
    output.appendLine("Disk camera on — agent tool writes (Cursor/Claude/Codex) do not need IDE Save.");
  }
  liveDisposables.push(
    vscode.languages.onDidChangeDiagnostics((e) => {
      if (diagTimer) clearTimeout(diagTimer);
      const uris = [...e.uris];
      diagTimer = setTimeout(() => {
        for (const uri of uris) {
          if (uri.scheme !== "file" || shouldIgnorePath(uri.fsPath)) continue;
          const errs = vscode.languages.getDiagnostics(uri).filter((d) => d.severity === vscode.DiagnosticSeverity.Error);
          for (const d of errs.slice(0, 2)) {
            appendLiveEvent({
              type: "error",
              path: uri.fsPath,
              error: String(d.message || "").slice(0, 200)
            });
          }
        }
      }, 900);
    })
  );
  const globs = [
    ".cursor/**/*.jsonl",
    ".claude/**/*.jsonl",
    ".claude-code/**/*.jsonl",
    ".aider/**/*.jsonl",
    ".continue/**/*.jsonl",
    ".windsurf/**/*.jsonl",
    ".cline/**/*.jsonl",
    ".roo/**/*.jsonl",
    ".codex/**/*.jsonl"
  ];
  for (const g of globs) {
    const w = vscode.workspace.createFileSystemWatcher(new vscode.RelativePattern(root, g));
    const onJsonl = (uri) => {
      void ingestJsonlTail(uri.fsPath, context);
    };
    w.onDidChange(onJsonl);
    w.onDidCreate(onJsonl);
    liveDisposables.push(w);
  }
}
async function ingestJsonlTail(abs, context) {
  if (!pipeline || !(0, import_node_fs6.existsSync)(abs)) return;
  const text = (0, import_node_fs6.readFileSync)(abs, "utf8");
  let start = jsonlOffsets.get(abs) ?? 0;
  if (text.length < start) start = 0;
  const chunk = text.slice(start);
  jsonlOffsets.set(abs, text.length);
  const useAi = settings().allowNetworkAi && (settings().llmEnabled || settings().mode === "audit") && Boolean(await resolveApiKey(context));
  for (const line of chunk.split("\n")) {
    await ingestLine(line, useAi, abs);
  }
}
async function ingestFileOnce(abs, context) {
  if (!pipeline || !(0, import_node_fs6.existsSync)(abs)) return;
  const text = (0, import_node_fs6.readFileSync)(abs, "utf8");
  const useAi = settings().allowNetworkAi && (settings().llmEnabled || settings().mode === "audit") && Boolean(await resolveApiKey(context));
  for (const line of text.split("\n")) {
    await ingestLine(line, useAi, abs);
  }
}
async function ingestFileFrom(abs, startOffset, context) {
  if (!pipeline || !(0, import_node_fs6.existsSync)(abs)) return;
  const text = (0, import_node_fs6.readFileSync)(abs, "utf8");
  if (text.length < startOffset) {
    fileOffset = 0;
    partialLine = "";
  }
  const chunk = text.slice(fileOffset);
  fileOffset = text.length;
  const combined = partialLine + chunk;
  const lines = combined.split("\n");
  partialLine = lines.pop() ?? "";
  const useAi = settings().allowNetworkAi && (settings().llmEnabled || settings().mode === "audit") && Boolean(await resolveApiKey(context));
  for (const line of lines) {
    await ingestLine(line, useAi, abs);
  }
}
async function ingestLine(line, useAi, sourcePath) {
  if (!pipeline) return;
  try {
    const agent = inferAgentFromPath(sourcePath);
    const ev = normalizeJsonlLine(line, {
      session_id: `${agent}-workspace`,
      agent
    });
    if (!ev) return;
    const result = useAi ? await pipeline.ingestAsync(ev) : pipeline.ingest(ev);
    lastResult = result;
    const sigs = result.signatures.map((s) => s.family);
    updateStatus(result.state, sigs);
    noteCompassEvent(line, result);
    output.appendLine(
      `[${ev.timestamp}] ${ev.action} \u2192 ${result.state} | ${sigs.join(", ") || "no signatures"}`
    );
    for (const a of result.alerts) {
      output.appendLine(`  ${a.level.toUpperCase()}: ${a.message}`);
    }
    for (const n of result.llm_notes) {
      if (!n.includes("skipped")) output.appendLine(`  llm: ${n}`);
    }
  } catch (err) {
    output.appendLine(
      `  (skip) ${err instanceof Error ? err.message : String(err)}`
    );
  }
}
function updateStatus(state, families) {
  const icon = state === "LOST" ? "$(error)" : state === "STAGNATING" ? "$(warning)" : state === "SUSPICIOUS" ? "$(info)" : "$(shield)";
  const sig = families.length > 0 ? ` \xB7 ${families.slice(0, 3).join(",")}` : "";
  statusBar.text = `${icon} Auditor: ${state}${sig}`;
  statusBar.command = "agentAuditor.showCompass";
  statusBar.tooltip = families.length ? `Signatures: ${families.join(", ")}
Click to open compass (bottom panel)` : "Agent Auditor compass \u2014 click to open bottom panel";
  statusBar.backgroundColor = state === "LOST" || state === "STAGNATING" ? new vscode.ThemeColor("statusBarItem.warningBackground") : void 0;
}
async function runFixtureDemo(context) {
  const root = workspaceRoot();
  const candidates = [
    root ? (0, import_node_path4.join)(root, "examples/same_error_repeat.jsonl") : "",
    (0, import_node_path4.join)(context.extensionPath, "media/same_error_repeat.jsonl"),
    (0, import_node_path4.join)(context.extensionPath, "../../examples/same_error_repeat.jsonl"),
    (0, import_node_path4.resolve)(__dirname, "../../../examples/same_error_repeat.jsonl")
  ].filter(Boolean);
  const fixture = candidates.find((p) => (0, import_node_fs6.existsSync)(p));
  if (!fixture) {
    vscode.window.showErrorMessage(
      "Fixture examples/same_error_repeat.jsonl not found. Open the agent-auditor repo as workspace."
    );
    return;
  }
  output.show(true);
  output.appendLine(`\u2500\u2500 Fixture demo: ${fixture} \u2500\u2500`);
  const pipe = await ensurePipeline(context);
  let events;
  try {
    events = normalizeClaudeJsonl(fixture, {
      session_id: "demo-same-error",
      agent: "claude-code"
    });
  } catch {
    events = normalizeCursorJsonl(fixture, {
      session_id: "demo-same-error",
      agent: "cursor"
    });
  }
  const useAi = settings().allowNetworkAi && Boolean(await resolveApiKey(context)) && (settings().llmEnabled || settings().mode === "audit");
  for (const ev of events) {
    const result = useAi ? await pipe.ingestAsync(ev) : pipe.ingest(ev);
    lastResult = result;
    const sigs = result.signatures.map((s) => s.family);
    updateStatus(result.state, sigs);
    for (const a of result.alerts) {
      output.appendLine(`  ${a.level}: ${a.message}`);
    }
  }
  const outcomePick = await vscode.window.showQuickPick(
    [
      { label: "FAILED", outcome: "FAILED" },
      { label: "SUCCESS", outcome: "SUCCESS" },
      { label: "USER_STOPPED", outcome: "USER_STOPPED" },
      { label: "RECOVERED", outcome: "RECOVERED" },
      { label: "ABORTED", outcome: "ABORTED" }
    ],
    { title: "Session outcome for Pattern Store (required)" }
  );
  if (!outcomePick) {
    vscode.window.showWarningMessage(
      "Fixture demo finished without storing patterns (no outcome selected)."
    );
    return;
  }
  const outcome = outcomePick.outcome;
  const summary = pipe.sessionOutcomeSummary(outcome);
  output.appendLine(
    `Session: ${events.length} events, ${summary.signatures.length} signatures, outcome=${outcome}`
  );
  for (const s of summary.signatures) {
    output.appendLine(
      `  \u2022 ${s.family} ${s.signature_hash} sev=${s.severity.toFixed(2)}`
    );
  }
  const store = await openLocalStore(root);
  try {
    const records = store.recordSession(
      summary.signatures,
      outcome,
      settings().privacy
    );
    output.appendLine(`Pattern store: ${store.path}`);
    for (const r of records) {
      const m = store.match(r.signature_hash);
      if (m) output.appendLine(`  ${estimateFailureProbability(m).label}`);
    }
  } finally {
    store.close();
  }
  vscode.window.showInformationMessage(
    `Fixture demo done \u2014 state ${lastResult?.state ?? "HEALTHY"} (${summary.signatures.map((s) => s.family).join(", ") || "no sigs"})`
  );
}
async function openLocalStore(root) {
  const projectPath = root ? (0, import_node_path4.join)(root, ".auditor", "patterns.json") : void 0;
  return new JsonPatternStore(projectPath);
}
function showLastRisk() {
  output.show(true);
  if (!lastResult) {
    output.appendLine("No risk assessment yet. Run Watch or Fixture Demo.");
    return;
  }
  const a = lastResult.assessment;
  output.appendLine(`\u2500\u2500 Last risk \u2500\u2500`);
  output.appendLine(`state=${a.state} score=${a.score.toFixed(3)}`);
  output.appendLine(`reasons: ${a.reasons.join("; ") || "(none)"}`);
  for (const s of a.signatures) {
    output.appendLine(
      `  ${s.family} hash=${s.signature_hash} fp=${s.fingerprint}`
    );
  }
  for (const n of lastResult.llm_notes) {
    output.appendLine(`  llm: ${n}`);
  }
}
async function privacySettings() {
  const current = settings().privacy;
  const pick = await vscode.window.showQuickPick(
    [
      {
        label: "$(lock) Local only (Recommended)",
        description: "Default \u2014 never upload",
        mode: "local_only"
      },
      {
        label: "$(cloud) Share anonymous signatures",
        description: "Stub only \u2014 nothing is uploaded yet",
        mode: "share_anonymous"
      }
    ],
    {
      title: "Agent Auditor Privacy",
      placeHolder: `Current: ${current}`
    }
  );
  if (!pick) return;
  if (pick.mode === "share_anonymous") {
    const ok = await vscode.window.showWarningMessage(
      "Opt-in share never collects source code, prompts, API keys, or file contents \u2014 only anonymized behavioral signatures + outcomes + version. V1 does not upload anything yet.",
      { modal: true },
      "Acknowledge (still no upload)"
    );
    if (ok !== "Acknowledge (still no upload)") return;
  }
  await vscode.workspace.getConfiguration("agentAuditor").update("privacy", pick.mode, vscode.ConfigurationTarget.Global);
  output.appendLine(`Privacy set to ${pick.mode} (no pattern upload in V1).`);
  vscode.window.showInformationMessage(
    `Privacy: ${pick.mode === "local_only" ? "Local only" : "Share anonymous (stub)"}`
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
