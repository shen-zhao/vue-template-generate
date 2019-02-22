// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true, //此项是用来告诉eslint找当前配置文件不能往父级查找
  parserOptions: {
    parser: "babel-eslint" //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  },
  env: {
    browser: true, //此项指定环境的全局变量，下面的配置指定为浏览器环境
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ["plugin:vue/essential", "airbnb-base"],
  // required to lint *.vue files
  plugins: [
    "vue"
  ],
  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js"
      }
    }
  },
  // add your custom rules here
  // 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
  // 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
  // "off" -> 0 关闭规则
  // "warn" -> 1 开启警告规则
  // "error" -> 2 开启错误规则
  rules: {
    "linebreak-style": "off",
    // don"t require .vue extension when importing
    "import/extensions": ["error", "always", {
      js: "never",
      vue: "never"
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    "no-param-reassign": ["error", {
      props: true,
      ignorePropertyModificationsFor: [
        "state", // for vuex state
        "acc", // for reduce accumulators
        "e" // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": ["error", {
      optionalDependencies: ["test/unit/index.js"]
    }],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "indent": 0, // 缩进2空格  tab
    "eqeqeq": 0, // 全等== ===  // 不强制
    "semi": 2, // 结尾分号 // 强制
    "max-len": 0,
    "comma-dangle": ["error", { // 结尾逗号  // 强制取消
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "object-shorthand": 0, // 对象字面量强制缩进
    "object-curly-spacing": 0, // 对象字面量前后空格
    "quotes": ["error", "single"], // 强制单引号
    "no-multiple-empty-lines": ["error", {
      "max": 1
    }], // 空白行
    "max-params": ["warn", {
      "maximum": 5
    }], // function最大入参
    "func-names": 0,
    "no-unused-vars": 0, // 未引用的变量
    "no-underscore-dangle": 0, // 下划线开头命名
    "no-tabs": 0,
    "spaced-comment": 0, // 注释符号前后空格
    "prefer-arrow-callback": 0,
    "consistent-return": 0,
    "no-alert": 1, // 不允许alert
    "no-console": 0, //
    "import/prefer-default-export": 0,
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true
    }],
    "no-param-reassign": 0,
    "no-plusplus": 0, // i++
    "radix": 0,
    "no-continue": 0,
    "quote-props": 0,
    "no-lonely-if": 0,
    "padded-blocks": ["error", "never"],
    "prefer-rest-params": 0, // arguments 是否禁用
    "no-restricted-syntax": 0, // 启用for-of fo-in (eslint推荐foreach)
    "arrow-parens": 0,
    "no-useless-escape": 0
  }
}
