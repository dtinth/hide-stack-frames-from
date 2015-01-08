hide-stack-frames-from
======================

Eliminates stack trace noise by hiding stack frames from any node module.

Why? I've been using [cucumber-js](https://github.com/cucumber/cucumber-js/issues/157) and whenever an error occur,
this happens.

(::) failed steps (::)

```
AssertionError: expected 6 to equal 3
  at Object.<anonymous> (/Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:33:49)
  at tryCatchApply (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/util.js:53:21)
  at Function.Promise.attempt.Promise.try (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:204:11)
  at World.<anonymous> (/Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:50:18)
  at Object.invoke (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/support_code/step_definition.js:88:14)
  at Object.execute (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/ast/step.js:175:22)
  at Object.acceptVisitor (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/ast/step.js:161:12)
  at Object.executeStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:290:12)
  at Object.processStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:285:14)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:127:16
  at callUserFunctionAndBroadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:151:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastBeforeEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:161:12)
  at Object.broadcastEventAroundUserFunction (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:145:12)
  at Object.visitStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:124:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/ast/scenario.js:98:17
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:166:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:156:32
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at handleStepResultEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:82:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at handleStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:27:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at handleStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/stats_journal.js:40:5)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.visitStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:140:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/ast/step.js:162:17
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/support_code/step_definition.js:63:11
  at /Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:55:13
  at tryCatch1 (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/util.js:21:21)
  at Promise._settlePromiseFromHandler (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:591:13)
  at Promise._settlePromiseAt (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:755:18)
  at Promise._settlePromiseAtPostResolution (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:326:10)
  at Promise.b (domain.js:183:18)
  at Async._drainQueue (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:83:12)
  at Async._drainQueues (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:88:10)
  at Async.drainQueues (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:13:14)
  at process._tickDomainCallback (node.js:463:13)

Failing scenarios:
/Users/dtinth/Bemuse/bms-spec/features/basic/03-Objects.feature:18 # Scenario: Reading objects

7 scenarios (1 failed, 6 passed)
21 steps (1 failed, 3 skipped, 17 passed)
[20:29:31] 'test:cucumber' errored after 278 ms
[20:29:31] Error: Cucumber tests failed!
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/index.js:50:26
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:24:9
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at handleAfterFeaturesEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:117:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at handleAfterFeaturesEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:49:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:166:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:156:32
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:166:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:156:32
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at handleAfterScenarioEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:60:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at handleAfterScenarioEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:44:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at handleAfterScenarioEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/stats_journal.js:78:5)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:166:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:156:32
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at Object.visitAfterSteps (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:115:18)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:68:22
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:166:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:156:32
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at handleStepResultEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:82:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at handleStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:27:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at handleStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/stats_journal.js:40:5)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.skipStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:297:12)
  at Object.processStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:283:14)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:127:16
  at callUserFunctionAndBroadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:151:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastBeforeEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:161:12)
  at Object.broadcastEventAroundUserFunction (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:145:12)
  at Object.visitStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:124:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/ast/scenario.js:98:17
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:166:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:156:32
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at handleStepResultEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:82:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at handleStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:27:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at handleStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/stats_journal.js:40:5)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.skipStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:297:12)
  at Object.processStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:283:14)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:127:16
  at callUserFunctionAndBroadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:151:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastBeforeEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:161:12)
  at Object.broadcastEventAroundUserFunction (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:145:12)
  at Object.visitStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:124:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/ast/scenario.js:98:17
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:166:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:156:32
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at handleStepResultEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:82:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at handleStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:27:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at handleStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/stats_journal.js:40:5)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.skipStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:297:12)
  at Object.processStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:283:14)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:127:16
  at callUserFunctionAndBroadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:151:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastBeforeEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:161:12)
  at Object.broadcastEventAroundUserFunction (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:145:12)
  at Object.visitStep (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:124:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/ast/scenario.js:98:17
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:8:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.broadcastAfterEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:166:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:156:32
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at onRuntimeListenersComplete (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:174:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:52:11)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:59:11
  at handleStepResultEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:82:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:16:7
  at handleStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:27:5)
  at hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:16:7
  at handleStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/stats_journal.js:40:5)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener.js:6:9)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/summary_formatter.js:15:18)
  at Object.hear (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/listener/pretty_formatter.js:15:22)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:179:51
  at processItem (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:58:9)
  at iterate (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:50:11)
  at Object.forEach (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/type/collection.js:62:7)
  at broadcastToListeners (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:178:19)
  at Object.broadcastEvent (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:170:7)
  at Object.visitStepResult (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/runtime/ast_tree_walker.js:140:12)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/ast/step.js:162:17
  at Function.fail (/Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/support_code/step_definition.js:80:9)
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/node_modules/cucumber/lib/cucumber/support_code/step_definition.js:58:24
  at /Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:59:11
  at tryCatch1 (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/util.js:21:21)
  at Promise._settlePromiseFromHandler (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:591:13)
  at Promise._settlePromiseAt (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:755:18)
  at Promise._settlePromiseAtPostResolution (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:326:10)
  at Promise.b (domain.js:183:18)
  at Async._drainQueue (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:83:12)
  at Async._drainQueues (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:88:10)
  at Async.drainQueues (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:13:14)
  at process._tickDomainCallback (node.js:463:13)
```

Don't you think it's painful to scroll to find find what caused the error?


<h1 align="center"><tt>require('hide-stack-frames-from')('cucumber')</tt></h1>

```
AssertionError: expected 6 to equal 3
  at Object.<anonymous> (/Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:33:49)
  at tryCatchApply (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/util.js:53:21)
  at Function.Promise.attempt.Promise.try (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:204:11)
  at World.<anonymous> (/Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:50:18)
  at /Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:55:13
  at tryCatch1 (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/util.js:21:21)
  at Promise._settlePromiseFromHandler (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:591:13)
  at Promise._settlePromiseAt (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:755:18)
  at Promise._settlePromiseAtPostResolution (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:326:10)
  at Promise.b (domain.js:183:18)
  at Async._drainQueue (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:83:12)
  at Async._drainQueues (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:88:10)
  at Async.drainQueues (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:13:14)
  at process._tickDomainCallback (node.js:463:13)

Failing scenarios:
/Users/dtinth/Bemuse/bms-spec/features/basic/03-Objects.feature:18 # Scenario: Reading objects

7 scenarios (1 failed, 6 passed)
21 steps (1 failed, 3 skipped, 17 passed)
[20:35:35] 'test:cucumber' errored after 308 ms
[20:35:35] Error: Cucumber tests failed!
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/index.js:50:26
  at /Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:59:11
  at tryCatch1 (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/util.js:21:21)
  at Promise._settlePromiseFromHandler (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:591:13)
  at Promise._settlePromiseAt (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:755:18)
  at Promise._settlePromiseAtPostResolution (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/promise.js:326:10)
  at Promise.b (domain.js:183:18)
  at Async._drainQueue (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:83:12)
  at Async._drainQueues (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:88:10)
  at Async.drainQueues (/Users/dtinth/Bemuse/bms-js/node_modules/bluebird/js/main/async.js:13:14)
  at process._tickDomainCallback (node.js:463:13)
```


<h1 align="center"><tt>require('hide-stack-frames-from')('cucumber', 'bluebird')</tt></h1>


```
AssertionError: expected 6 to equal 3
  at Object.<anonymous> (/Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:33:49)
  at World.<anonymous> (/Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:50:18)
  at /Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:55:13
  at Promise.b (domain.js:183:18)
  at process._tickDomainCallback (node.js:463:13)

Failing scenarios:
/Users/dtinth/Bemuse/bms-spec/features/basic/03-Objects.feature:18 # Scenario: Reading objects

7 scenarios (1 failed, 6 passed)
21 steps (1 failed, 3 skipped, 17 passed)
[20:36:48] 'test:cucumber' errored after 230 ms
[20:36:48] Error: Cucumber tests failed!
  at /Users/dtinth/Bemuse/bms-js/node_modules/gulp-cucumber/index.js:50:26
  at /Users/dtinth/Bemuse/bms-js/features/step_definitions/bms_steps.js:59:11
  at Promise.b (domain.js:183:18)
  at process._tickDomainCallback (node.js:463:13)
```


Looks better?


<h1 align="center"><tt>npm i --save-dev hide-stack-frames-from</tt></h1>
