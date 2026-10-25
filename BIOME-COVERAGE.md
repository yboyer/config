# Biome rule coverage

The original rule audit below targets Biome 2.5.12 and Oxlint 1.87.0.
The focused synchronization below targets the Biome 2.6.2 preset; the original
rule inventory and counts have not been re-audited against 2.6.2.
Recommendations and domain membership come from `biome explain` for every rule
in the versioned configuration schema. Source correspondences come from the
[official Biome mapping](https://biomejs.dev/linter/javascript/sources/) and the installed Oxlint rule registry.
Mappings indicate comparable intent, not identical diagnostics or fixes.

Original audit: 532 rules inspected; 280 active in the Biome 2.5.12 preset.
The audit includes non-JavaScript rules; Oxlint does not lint CSS, JSON, GraphQL or HTML.
Biome information-level diagnostics are represented as Oxlint warnings.
Rules supplied by TypeScript syntax/type diagnostics are not treated as native lint mappings.

| Biome rule                                       | Effective Biome level | Oxlint counterpart                                                                                            |
| ------------------------------------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------- |
| `a11y/noAccessKey`                               | error                 | `jsx-a11y/no-access-key`                                                                                      |
| `a11y/noAmbiguousAnchorText`                     | error                 | `jsx-a11y/anchor-ambiguous-text`                                                                              |
| `a11y/noAriaHiddenOnFocusable`                   | error                 | `jsx-a11y/no-aria-hidden-on-focusable`                                                                        |
| `a11y/noAriaUnsupportedElements`                 | error                 | `jsx-a11y/aria-unsupported-elements`                                                                          |
| `a11y/noAutofocus`                               | error                 | `jsx-a11y/no-autofocus`                                                                                       |
| `a11y/noDistractingElements`                     | error                 | `jsx-a11y/no-distracting-elements`                                                                            |
| `a11y/noHeaderScope`                             | error                 | `jsx-a11y/scope`                                                                                              |
| `a11y/noInteractiveElementToNoninteractiveRole`  | error                 | `jsx-a11y/no-interactive-element-to-noninteractive-role`                                                      |
| `a11y/noLabelWithoutControl`                     | error                 | `jsx-a11y/label-has-associated-control`                                                                       |
| `a11y/noNoninteractiveElementToInteractiveRole`  | error                 | `jsx-a11y/no-noninteractive-element-to-interactive-role`                                                      |
| `a11y/noNoninteractiveTabindex`                  | error                 | `jsx-a11y/no-noninteractive-tabindex`                                                                         |
| `a11y/noPositiveTabindex`                        | error                 | `jsx-a11y/tabindex-no-positive`                                                                               |
| `a11y/noRedundantAlt`                            | error                 | `jsx-a11y/img-redundant-alt`                                                                                  |
| `a11y/noRedundantRoles`                          | error                 | `jsx-a11y/no-redundant-roles`                                                                                 |
| `a11y/noStaticElementInteractions`               | error                 | `jsx-a11y/no-static-element-interactions`                                                                     |
| `a11y/noSvgWithoutTitle`                         | error                 | No direct native mapping                                                                                      |
| `a11y/useAltText`                                | error                 | `jsx-a11y/alt-text`                                                                                           |
| `a11y/useAnchorContent`                          | error                 | `jsx-a11y/anchor-has-content`                                                                                 |
| `a11y/useAriaActivedescendantWithTabindex`       | error                 | `jsx-a11y/aria-activedescendant-has-tabindex`                                                                 |
| `a11y/useAriaPropsForRole`                       | error                 | `jsx-a11y/role-has-required-aria-props`                                                                       |
| `a11y/useAriaPropsSupportedByRole`               | error                 | `jsx-a11y/role-supports-aria-props`                                                                           |
| `a11y/useButtonType`                             | error                 | `react/button-has-type`                                                                                       |
| `a11y/useFocusableInteractive`                   | error                 | `jsx-a11y/interactive-supports-focus`                                                                         |
| `a11y/useGenericFontNames`                       | error                 | No direct native mapping                                                                                      |
| `a11y/useHeadingContent`                         | error                 | `jsx-a11y/heading-has-content`                                                                                |
| `a11y/useHtmlLang`                               | error                 | `jsx-a11y/html-has-lang`                                                                                      |
| `a11y/useIframeTitle`                            | error                 | `jsx-a11y/iframe-has-title`                                                                                   |
| `a11y/useKeyWithClickEvents`                     | error                 | `jsx-a11y/click-events-have-key-events`                                                                       |
| `a11y/useKeyWithMouseEvents`                     | error                 | `jsx-a11y/mouse-events-have-key-events`                                                                       |
| `a11y/useMediaCaption`                           | error                 | `jsx-a11y/media-has-caption`                                                                                  |
| `a11y/useSemanticElements`                       | error                 | `jsx-a11y/prefer-tag-over-role`                                                                               |
| `a11y/useValidAnchor`                            | error                 | `jsx-a11y/anchor-is-valid`                                                                                    |
| `a11y/useValidAriaProps`                         | error                 | `jsx-a11y/aria-props`                                                                                         |
| `a11y/useValidAriaRole`                          | error                 | `jsx-a11y/aria-role`                                                                                          |
| `a11y/useValidAriaValues`                        | error                 | `jsx-a11y/aria-proptypes`                                                                                     |
| `a11y/useValidAutocomplete`                      | error                 | `jsx-a11y/autocomplete-valid`                                                                                 |
| `a11y/useValidLang`                              | error                 | `jsx-a11y/lang`                                                                                               |
| `complexity/noAdjacentSpacesInRegex`             | warn                  | `no-regex-spaces`                                                                                             |
| `complexity/noArguments`                         | warn                  | `prefer-rest-params`                                                                                          |
| `complexity/noBannedTypes`                       | warn                  | `typescript/no-empty-object-type`, `typescript/no-unsafe-function-type`, `typescript/no-wrapper-object-types` |
| `complexity/noCommaOperator`                     | warn                  | `no-sequences`                                                                                                |
| `complexity/noEmptyTypeParameters`               | warn                  | No direct native mapping                                                                                      |
| `complexity/noExtraBooleanCast`                  | error                 | `no-extra-boolean-cast`                                                                                       |
| `complexity/noFlatMapIdentity`                   | error                 | No direct native mapping                                                                                      |
| `complexity/noImportantStyles`                   | warn                  | No direct native mapping                                                                                      |
| `complexity/noStaticOnlyClass`                   | warn                  | `unicorn/no-static-only-class`                                                                                |
| `complexity/noThisInStatic`                      | warn                  | No direct native mapping                                                                                      |
| `complexity/noUselessCatch`                      | error                 | `no-useless-catch`                                                                                            |
| `complexity/noUselessConstructor`                | error                 | `no-useless-constructor`                                                                                      |
| `complexity/noUselessContinue`                   | error                 | No direct native mapping                                                                                      |
| `complexity/noUselessEmptyExport`                | error                 | `typescript/no-useless-empty-export`                                                                          |
| `complexity/noUselessEscapeInRegex`              | error                 | `no-useless-escape`                                                                                           |
| `complexity/noUselessFragments`                  | error                 | `react/jsx-no-useless-fragment`                                                                               |
| `complexity/noUselessLabel`                      | error                 | `no-extra-label`                                                                                              |
| `complexity/noUselessLoneBlockStatements`        | error                 | `no-lone-blocks`                                                                                              |
| `complexity/noUselessRename`                     | error                 | `no-useless-rename`                                                                                           |
| `complexity/noUselessStringConcat`               | error                 | `no-useless-concat`                                                                                           |
| `complexity/noUselessStringRaw`                  | error                 | No direct native mapping                                                                                      |
| `complexity/noUselessSwitchCase`                 | error                 | `unicorn/no-useless-switch-case`                                                                              |
| `complexity/noUselessTernary`                    | error                 | `no-unneeded-ternary`                                                                                         |
| `complexity/noUselessThisAlias`                  | error                 | `typescript/no-this-alias`                                                                                    |
| `complexity/noUselessTypeConstraint`             | error                 | `typescript/no-unnecessary-type-constraint`                                                                   |
| `complexity/noUselessUndefinedInitialization`    | error                 | No direct native mapping                                                                                      |
| `complexity/useArrayFind`                        | error                 | `unicorn/prefer-array-find`                                                                                   |
| `complexity/useArrowFunction`                    | warn                  | `prefer-arrow-callback`                                                                                       |
| `complexity/useDateNow`                          | warn                  | `unicorn/prefer-date-now`                                                                                     |
| `complexity/useFlatMap`                          | error                 | `unicorn/prefer-array-flat-map`                                                                               |
| `complexity/useIndexOf`                          | error                 | `unicorn/prefer-array-index-of`                                                                               |
| `complexity/useLiteralKeys`                      | error                 | `no-useless-computed-key`                                                                                     |
| `complexity/useNumericLiterals`                  | warn                  | `prefer-numeric-literals`                                                                                     |
| `complexity/useOptionalChain`                    | warn                  | `typescript/prefer-optional-chain`                                                                            |
| `complexity/useRegexLiterals`                    | warn                  | `prefer-regex-literals`                                                                                       |
| `complexity/useSimpleNumberKeys`                 | warn                  | No direct native mapping                                                                                      |
| `correctness/noChildrenProp`                     | error                 | `react/no-children-prop`                                                                                      |
| `correctness/noConstAssign`                      | error                 | `no-const-assign`                                                                                             |
| `correctness/noConstantCondition`                | error                 | `no-constant-condition`                                                                                       |
| `correctness/noConstantMathMinMaxClamp`          | error                 | `oxc/bad-min-max-func`                                                                                        |
| `correctness/noConstructorReturn`                | error                 | `no-constructor-return`                                                                                       |
| `correctness/noDuplicateArgumentNames`           | error                 | No direct native mapping                                                                                      |
| `correctness/noDuplicateAttributes`              | error                 | No direct native mapping                                                                                      |
| `correctness/noDuplicateEnumValueNames`          | error                 | No direct native mapping                                                                                      |
| `correctness/noDuplicateInputFieldNames`         | error                 | No direct native mapping                                                                                      |
| `correctness/noDuplicateVariableNames`           | error                 | `no-redeclare`                                                                                                |
| `correctness/noEmptyCharacterClassInRegex`       | error                 | `no-empty-character-class`                                                                                    |
| `correctness/noEmptyPattern`                     | error                 | `no-empty-pattern`                                                                                            |
| `correctness/noGlobalObjectCalls`                | error                 | `no-obj-calls`                                                                                                |
| `correctness/noInnerDeclarations`                | error                 | `no-inner-declarations`                                                                                       |
| `correctness/noInvalidBuiltinInstantiation`      | error                 | `no-new-native-nonconstructor`, `unicorn/new-for-builtins`                                                    |
| `correctness/noInvalidConstructorSuper`          | error                 | `constructor-super`                                                                                           |
| `correctness/noInvalidDirectionInLinearGradient` | error                 | No direct native mapping                                                                                      |
| `correctness/noInvalidGridAreas`                 | error                 | No direct native mapping                                                                                      |
| `correctness/noInvalidPositionAtImportRule`      | error                 | No direct native mapping                                                                                      |
| `correctness/noInvalidUseBeforeDeclaration`      | error                 | `no-use-before-define`                                                                                        |
| `correctness/noMissingVarFunction`               | error                 | No direct native mapping                                                                                      |
| `correctness/noNonoctalDecimalEscape`            | error                 | `no-nonoctal-decimal-escape`                                                                                  |
| `correctness/noPrecisionLoss`                    | error                 | `no-loss-of-precision`                                                                                        |
| `correctness/noPrivateImports`                   | warn                  | No direct native mapping                                                                                      |
| `correctness/noRenderReturnValue`                | error                 | No direct native mapping                                                                                      |
| `correctness/noSelfAssign`                       | error                 | `no-self-assign`                                                                                              |
| `correctness/noSetterReturn`                     | error                 | `no-setter-return`                                                                                            |
| `correctness/noStringCaseMismatch`               | error                 | No direct native mapping                                                                                      |
| `correctness/noSwitchDeclarations`               | error                 | `no-case-declarations`                                                                                        |
| `correctness/noUndeclaredDependencies`           | error                 | No direct native mapping                                                                                      |
| `correctness/noUndeclaredVariables`              | error                 | `no-undef`                                                                                                    |
| `correctness/noUnknownFunction`                  | error                 | No direct native mapping                                                                                      |
| `correctness/noUnknownMediaFeatureName`          | error                 | No direct native mapping                                                                                      |
| `correctness/noUnknownProperty`                  | error                 | No direct native mapping                                                                                      |
| `correctness/noUnknownPseudoClass`               | error                 | No direct native mapping                                                                                      |
| `correctness/noUnknownPseudoElement`             | error                 | No direct native mapping                                                                                      |
| `correctness/noUnknownTypeSelector`              | error                 | No direct native mapping                                                                                      |
| `correctness/noUnknownUnit`                      | error                 | No direct native mapping                                                                                      |
| `correctness/noUnmatchableAnbSelector`           | error                 | No direct native mapping                                                                                      |
| `correctness/noUnreachable`                      | error                 | `no-unreachable`                                                                                              |
| `correctness/noUnreachableSuper`                 | error                 | `no-this-before-super`                                                                                        |
| `correctness/noUnsafeFinally`                    | error                 | `no-unsafe-finally`                                                                                           |
| `correctness/noUnsafeOptionalChaining`           | error                 | `no-unsafe-optional-chaining`                                                                                 |
| `correctness/noUnusedFunctionParameters`         | warn                  | `no-unused-vars`                                                                                              |
| `correctness/noUnusedImports`                    | error                 | `no-unused-vars`                                                                                              |
| `correctness/noUnusedInstantiation`              | error                 | `no-new`                                                                                                      |
| `correctness/noUnusedLabels`                     | warn                  | `no-unused-labels`                                                                                            |
| `correctness/noUnusedPrivateClassMembers`        | warn                  | `no-unused-private-class-members`                                                                             |
| `correctness/noUnusedVariables`                  | warn                  | `no-unused-vars`                                                                                              |
| `correctness/noVoidElementsWithChildren`         | error                 | `react/void-dom-elements-no-children`                                                                         |
| `correctness/noVoidTypeReturn`                   | error                 | No direct native mapping                                                                                      |
| `correctness/useExhaustiveDependencies`          | error                 | `react/exhaustive-deps`                                                                                       |
| `correctness/useGraphqlNamedOperations`          | error                 | No direct native mapping                                                                                      |
| `correctness/useHookAtTopLevel`                  | error                 | `react/rules-of-hooks`                                                                                        |
| `correctness/useInlineScriptId`                  | error                 | `nextjs/inline-script-id`                                                                                     |
| `correctness/useIsNan`                           | error                 | `use-isnan`                                                                                                   |
| `correctness/useJsxKeyInIterable`                | error                 | `react/jsx-key`                                                                                               |
| `correctness/useLoneAnonymousOperation`          | error                 | No direct native mapping                                                                                      |
| `correctness/useValidForDirection`               | error                 | `for-direction`                                                                                               |
| `correctness/useValidTypeof`                     | error                 | `valid-typeof`                                                                                                |
| `correctness/useYield`                           | error                 | `require-yield`                                                                                               |
| `nursery/noFloatingPromises`                     | error                 | `typescript/no-floating-promises`                                                                             |
| `nursery/noIdenticalTestTitle`                   | warn                  | `vitest/no-identical-title`, `jest/no-identical-title`                                                        |
| `nursery/noImpliedEval`                          | error                 | `typescript/no-implied-eval`, `no-new-func`                                                                   |
| `nursery/noInvalidPropertyInitValue`             | info                  | No direct native mapping                                                                                      |
| `nursery/noNegationInEqualityCheck`              | error                 | `unicorn/no-negation-in-equality-check`                                                                       |
| `suspicious/noReactNativeDeepImports`            | error                 | `no-restricted-imports`                                                                                       |
| `nursery/noReactNativeRawText`                   | error                 | No direct native mapping                                                                                      |
| `nursery/noReactStringRefs`                      | warn                  | `react/no-string-refs`                                                                                        |
| `nursery/useDomNodeTextContent`                  | info                  | `unicorn/prefer-dom-node-text-content`                                                                        |
| `nursery/useFlatMathMinMax`                      | warn                  | No direct native mapping                                                                                      |
| `nursery/useMathMinMax`                          | warn                  | `unicorn/prefer-math-min-max`                                                                                 |
| `nursery/useModernMathApis`                      | warn                  | `unicorn/prefer-modern-math-apis`                                                                             |
| `nursery/useReactFunctionComponentDefinition`    | error                 | `react/function-component-definition`                                                                         |
| `nursery/useReactNativePlatformComponents`       | error                 | No direct native mapping                                                                                      |
| `performance/noDynamicNamespaceImportAccess`     | warn                  | No direct native mapping                                                                                      |
| `performance/noImgElement`                       | warn                  | `nextjs/no-img-element`                                                                                       |
| `performance/noUnwantedPolyfillio`               | warn                  | `nextjs/no-unwanted-polyfillio`                                                                               |
| `performance/useGoogleFontPreconnect`            | info                  | `nextjs/google-font-preconnect`                                                                               |
| `security/noBlankTarget`                         | error                 | `react/jsx-no-target-blank`                                                                                   |
| `security/noDangerouslySetInnerHtml`             | error                 | `react/no-danger`                                                                                             |
| `security/noDangerouslySetInnerHtmlWithChildren` | error                 | `react/no-danger-with-children`                                                                               |
| `security/noGlobalEval`                          | error                 | `no-eval`                                                                                                     |
| `security/noScriptUrl`                           | error                 | `no-script-url`, `react/jsx-no-script-url`                                                                    |
| `style/noCommonJs`                               | error                 | `import/no-commonjs`                                                                                          |
| `style/noDescendingSpecificity`                  | warn                  | No direct native mapping                                                                                      |
| `style/noDoneCallback`                           | error                 | `jest/no-done-callback`                                                                                       |
| `style/noHeadElement`                            | warn                  | `nextjs/no-head-element`                                                                                      |
| `style/noMultilineString`                        | error                 | `no-multi-str`                                                                                                |
| `style/noNamespace`                              | error                 | `typescript/no-namespace`                                                                                     |
| `style/noNestedTernary`                          | error                 | `no-nested-ternary`                                                                                           |
| `style/noParameterAssign`                        | error                 | `no-param-reassign`                                                                                           |
| `style/noRestrictedImports`                      | error                 | `no-restricted-imports`                                                                                       |
| `style/noUselessElse`                            | error                 | `no-else-return`                                                                                              |
| `style/noYodaExpression`                         | error                 | `yoda`                                                                                                        |
| `style/useArrayLiterals`                         | error                 | `no-array-constructor`                                                                                        |
| `style/useAsConstAssertion`                      | error                 | `typescript/prefer-as-const`                                                                                  |
| `style/useCollapsedElseIf`                       | error                 | `no-lonely-if`                                                                                                |
| `style/useConsistentBuiltinInstantiation`        | error                 | `unicorn/new-for-builtins`                                                                                    |
| `style/useConsistentCurlyBraces`                 | error                 | `react/jsx-curly-brace-presence`                                                                              |
| `style/useConsistentObjectDefinitions`           | error                 | `object-shorthand`                                                                                            |
| `style/useConst`                                 | warn                  | `prefer-const`                                                                                                |
| `style/useDefaultParameterLast`                  | error                 | `default-param-last`                                                                                          |
| `style/useDefaultSwitchClause`                   | error                 | `default-case`                                                                                                |
| `style/useDeprecatedReason`                      | warn                  | No direct native mapping                                                                                      |
| `style/useExportType`                            | warn                  | `typescript/consistent-type-exports`                                                                          |
| `style/useGroupedAccessorPairs`                  | error                 | `grouped-accessor-pairs`                                                                                      |
| `style/useImportType`                            | error                 | `typescript/consistent-type-imports`                                                                          |
| `style/useLiteralEnumMembers`                    | warn                  | `typescript/prefer-literal-enum-member`                                                                       |
| `style/useNodejsImportProtocol`                  | error                 | `unicorn/prefer-node-protocol`                                                                                |
| `style/useObjectSpread`                          | error                 | `prefer-object-spread`                                                                                        |
| `style/useShorthandAssign`                       | error                 | `operator-assignment`                                                                                         |
| `style/useShorthandFunctionType`                 | error                 | `typescript/prefer-function-type`                                                                             |
| `style/useSingleVarDeclarator`                   | error                 | `one-var`                                                                                                     |
| `style/useSpreadOverApply`                       | error                 | `prefer-spread`                                                                                               |
| `style/useSymbolDescription`                     | error                 | `symbol-description`                                                                                          |
| `style/useTemplate`                              | error                 | `prefer-template`                                                                                             |
| `style/useThrowOnlyError`                        | error                 | `typescript/only-throw-error`                                                                                 |
| `suspicious/noApproximativeNumericConstant`      | warn                  | `oxc/approx-constant`                                                                                         |
| `suspicious/noArrayIndexKey`                     | error                 | `react/no-array-index-key`                                                                                    |
| `suspicious/noAssignInExpressions`               | error                 | `no-cond-assign`                                                                                              |
| `suspicious/noAsyncPromiseExecutor`              | error                 | `no-async-promise-executor`                                                                                   |
| `suspicious/noBiomeFirstException`               | error                 | No direct native mapping                                                                                      |
| `suspicious/noBitwiseOperators`                  | error                 | `no-bitwise`                                                                                                  |
| `suspicious/noCatchAssign`                       | warn                  | `no-ex-assign`                                                                                                |
| `suspicious/noClassAssign`                       | error                 | `no-class-assign`                                                                                             |
| `suspicious/noCommentText`                       | error                 | `react/jsx-no-comment-textnodes`                                                                              |
| `suspicious/noCompareNegZero`                    | error                 | `no-compare-neg-zero`                                                                                         |
| `suspicious/noConfusingLabels`                   | warn                  | `no-labels`                                                                                                   |
| `suspicious/noConfusingVoidType`                 | warn                  | `typescript/no-invalid-void-type`                                                                             |
| `suspicious/noConsole`                           | error                 | `no-console`                                                                                                  |
| `suspicious/noConstEnum`                         | warn                  | `oxc/no-const-enum`                                                                                           |
| `suspicious/noControlCharactersInRegex`          | error                 | `no-control-regex`                                                                                            |
| `suspicious/noDebugger`                          | error                 | `no-debugger`                                                                                                 |
| `suspicious/noDeprecatedMediaType`               | warn                  | No direct native mapping                                                                                      |
| `suspicious/noDocumentCookie`                    | warn                  | `unicorn/no-document-cookie`                                                                                  |
| `suspicious/noDocumentImportInPage`              | warn                  | `nextjs/no-document-import-in-page`                                                                           |
| `suspicious/noDoubleEquals`                      | error                 | `eqeqeq`                                                                                                      |
| `suspicious/noDuplicateAtImportRules`            | error                 | No direct native mapping                                                                                      |
| `suspicious/noDuplicateCase`                     | error                 | `no-duplicate-case`                                                                                           |
| `suspicious/noDuplicateClassMembers`             | error                 | `no-dupe-class-members`                                                                                       |
| `suspicious/noDuplicateCustomProperties`         | error                 | No direct native mapping                                                                                      |
| `suspicious/noDuplicateElseIf`                   | error                 | `no-dupe-else-if`                                                                                             |
| `suspicious/noDuplicateEnumValues`               | warn                  | `typescript/no-duplicate-enum-values`                                                                         |
| `suspicious/noDuplicateFields`                   | info                  | No direct native mapping                                                                                      |
| `suspicious/noDuplicateFontNames`                | error                 | No direct native mapping                                                                                      |
| `suspicious/noDuplicateJsxProps`                 | error                 | `react/jsx-no-duplicate-props`                                                                                |
| `suspicious/noDuplicateObjectKeys`               | error                 | `no-dupe-keys`                                                                                                |
| `suspicious/noDuplicateParameters`               | error                 | No direct native mapping                                                                                      |
| `suspicious/noDuplicateProperties`               | error                 | No direct native mapping                                                                                      |
| `suspicious/noDuplicateSelectorsKeyframeBlock`   | error                 | No direct native mapping                                                                                      |
| `suspicious/noDuplicateTestHooks`                | error                 | `vitest/no-duplicate-hooks`, `jest/no-duplicate-hooks`                                                        |
| `suspicious/noEmptyBlock`                        | warn                  | `no-empty`                                                                                                    |
| `suspicious/noEmptyInterface`                    | error                 | `typescript/no-empty-interface`                                                                               |
| `suspicious/noExplicitAny`                       | warn                  | `typescript/no-explicit-any`                                                                                  |
| `suspicious/noExportsInTest`                     | error                 | `jest/no-export`                                                                                              |
| `suspicious/noExtraNonNullAssertion`             | warn                  | `typescript/no-extra-non-null-assertion`                                                                      |
| `suspicious/noFallthroughSwitchClause`           | error                 | `no-fallthrough`                                                                                              |
| `suspicious/noFocusedTests`                      | warn                  | `vitest/no-focused-tests`, `jest/no-focused-tests`                                                            |
| `suspicious/noFunctionAssign`                    | error                 | `no-func-assign`                                                                                              |
| `suspicious/noGlobalAssign`                      | error                 | `no-global-assign`                                                                                            |
| `suspicious/noGlobalIsFinite`                    | warn                  | No direct native mapping                                                                                      |
| `suspicious/noGlobalIsNan`                       | warn                  | No direct native mapping                                                                                      |
| `suspicious/noHeadImportInDocument`              | warn                  | `nextjs/no-head-import-in-document`                                                                           |
| `suspicious/noImplicitAnyLet`                    | error                 | No direct native mapping                                                                                      |
| `suspicious/noImportAssign`                      | error                 | `no-import-assign`                                                                                            |
| `suspicious/noImportCycles`                      | error                 | `import/no-cycle`                                                                                             |
| `suspicious/noImportantInKeyframe`               | error                 | No direct native mapping                                                                                      |
| `suspicious/noIrregularWhitespace`               | warn                  | `no-irregular-whitespace`                                                                                     |
| `suspicious/noLabelVar`                          | error                 | `no-label-var`                                                                                                |
| `suspicious/noMisleadingCharacterClass`          | error                 | `no-misleading-character-class`                                                                               |
| `suspicious/noMisleadingInstantiator`            | error                 | `typescript/no-misused-new`                                                                                   |
| `suspicious/noMisplacedAssertion`                | error                 | `vitest/no-standalone-expect`, `jest/no-standalone-expect`                                                    |
| `suspicious/noMisrefactoredShorthandAssign`      | error                 | `oxc/misrefactored-assign-op`                                                                                 |
| `suspicious/noNonNullAssertedOptionalChain`      | error                 | `typescript/no-non-null-asserted-optional-chain`                                                              |
| `suspicious/noOctalEscape`                       | warn                  | No direct native mapping                                                                                      |
| `suspicious/noProto`                             | warn                  | `no-proto`                                                                                                    |
| `suspicious/noPrototypeBuiltins`                 | warn                  | `no-prototype-builtins`                                                                                       |
| `suspicious/noQuickfixBiome`                     | info                  | No direct native mapping                                                                                      |
| `suspicious/noRedeclare`                         | error                 | `no-redeclare`                                                                                                |
| `suspicious/noRedundantUseStrict`                | warn                  | No direct native mapping                                                                                      |
| `suspicious/noSelfCompare`                       | error                 | `no-self-compare`                                                                                             |
| `suspicious/noShadow`                            | error                 | `no-shadow`                                                                                                   |
| `suspicious/noShadowRestrictedNames`             | error                 | `no-shadow-restricted-names`                                                                                  |
| `suspicious/noShorthandPropertyOverrides`        | error                 | No direct native mapping                                                                                      |
| `suspicious/noSparseArray`                       | error                 | `no-sparse-arrays`                                                                                            |
| `suspicious/noSuspiciousSemicolonInJsx`          | warn                  | No direct native mapping                                                                                      |
| `suspicious/noTemplateCurlyInString`             | warn                  | `no-template-curly-in-string`                                                                                 |
| `suspicious/noThenProperty`                      | error                 | `unicorn/no-thenable`                                                                                         |
| `suspicious/noTsIgnore`                          | warn                  | `typescript/ban-ts-comment`                                                                                   |
| `suspicious/noUnknownAtRules`                    | error                 | No direct native mapping                                                                                      |
| `suspicious/noUnsafeDeclarationMerging`          | error                 | `typescript/no-unsafe-declaration-merging`                                                                    |
| `suspicious/noUnsafeNegation`                    | error                 | `no-unsafe-negation`                                                                                          |
| `suspicious/noUnusedExpressions`                 | error                 | `no-unused-expressions`                                                                                       |
| `suspicious/noUselessEscapeInString`             | warn                  | No direct native mapping                                                                                      |
| `suspicious/noUselessRegexBackrefs`              | warn                  | `no-useless-backreference`                                                                                    |
| `suspicious/noWith`                              | error                 | `no-with`                                                                                                     |
| `suspicious/useAdjacentOverloadSignatures`       | warn                  | `typescript/adjacent-overload-signatures`                                                                     |
| `suspicious/useArraySortCompare`                 | error                 | `typescript/require-array-sort-compare`                                                                       |
| `suspicious/useBiomeIgnoreFolder`                | warn                  | No direct native mapping                                                                                      |
| `suspicious/useDefaultSwitchClauseLast`          | warn                  | `default-case-last`                                                                                           |
| `suspicious/useGetterReturn`                     | error                 | `getter-return`                                                                                               |
| `suspicious/useGoogleFontDisplay`                | warn                  | `nextjs/google-font-display`                                                                                  |
| `suspicious/useGuardForIn`                       | error                 | `guard-for-in`                                                                                                |
| `suspicious/useIsArray`                          | warn                  | `unicorn/no-instanceof-array`                                                                                 |
| `suspicious/useIterableCallbackReturn`           | error                 | `array-callback-return`                                                                                       |
| `suspicious/useNamespaceKeyword`                 | error                 | `typescript/prefer-namespace-keyword`                                                                         |

## Synchronized sorting and import restrictions

These settings require Biome 2.6.2 or newer, matching the declared peer baseline.
The development dependency pins Biome to 2.6.2. Run `npm run check:biome` to load
and validate `biome.json`, with formatting, lint and assists disabled. This
configuration-only check also runs in PR and release workflows; it does not test
the behaviors below.

| Behavior                                           | Biome configuration                                          | Vite+ configuration                                                         |
| -------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------- |
| Preserve interface groups separated by blank lines | `useSortedInterfaceMembers.options.partitionByNewLine: true` | `perfectionist/sort-interfaces` with `partitionByNewLine: true`             |
| Place `key` first in JSX                           | `useSortedAttributes.options.sortFirst: ["key"]`             | `perfectionist/sort-jsx-props` with a custom `^key$` group before `unknown` |
| Sort Tailwind classes                              | `nursery/useTailwindSortedClasses: error`                    | Oxfmt `sortTailwindcss` enabled                                             |
| Reject React Native internal imports               | `suspicious/noReactNativeDeepImports: error`                 | `no-restricted-imports` with `react-native/*`                               |

The interface and React Native restrictions were already configured in the Vite+
preset. The JSX rule keeps natural, case-sensitive sorting for the other props.
Biome's attribute action also covers supported HTML markup; the Perfectionist
rule covers JSX. Spreads remain sorting boundaries.

Tailwind sorting targets `class` and `className`. Oxfmt additionally configures
`clsx`, `tw`, `twMerge`, `twJoin`, `cn`, `cc`, `cnb`, `ctl`, `cva`, and `tv` to match
the default function names recognized by Biome. Function argument traversal and
custom utility ordering can differ between the engines; this is intent parity,
not a guarantee of identical output. Biome's lint rule may require unsafe fixes
(`biome check --write --unsafe`); Oxfmt sorts during formatting.

For a custom Tailwind v4 theme, consumers should point `tailwind.stylesheet`
(Biome) and `fmt.sortTailwindcss.stylesheet` (Vite+) at their own CSS entry point.
The shared preset does not hard-code a project-specific stylesheet path.
Tailwind lint rules beyond class sorting are not reproduced by this setting.

## YAML formatting

Both presets prefer single quotes in YAML: Biome uses
`yaml.formatter.quoteStyle: "single"`, and Oxfmt uses `singleQuote: true`.
Biome inherits global `bracketSpacing: true` for flow sequences, producing
`[ master, main ]`. Oxfmt produces `[master, main]` and has no option to add
spaces inside YAML flow sequences. This difference remains intentional.

## Limitations

- Domain dependency/version discovery differs: native plugins are explicitly enabled.
- React Native raw text and platform component checks have no native mapping. Deep imports are approximated with `no-restricted-imports`.
- `noFlatMapIdentity`, `noUselessContinue`, `noUselessStringRaw`, dependency declaration checks and initialization-only undefined checks remain unavailable.
- `unicorn/no-useless-undefined` is deliberately omitted: it also forbids undefined in other contexts.
- Unused imports and variables share one Oxlint rule and severity; Biome uses error for imports and warning for variables. The combined rule remains error to preserve unused-import enforcement.
- TypeScript diagnostics remain enabled; they may report errors Biome did not.
- Biome safe-fix preferences and non-JavaScript linting are not reproduced.
- Sorting parity is limited to the documented mappings; other Biome assists are not fully reproduced.
- The underscore and rest-sibling exceptions for unused bindings are preserved where native options permit.
- Multiple Biome rules can share one Oxlint rule; the stricter configured severity wins.
