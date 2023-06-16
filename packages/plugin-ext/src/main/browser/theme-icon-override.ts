// *****************************************************************************
// Copyright (C) 2022 TypeFox and others.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License v. 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0.
//
// This Source Code may also be made available under the following Secondary
// Licenses when the conditions for such availability set forth in the Eclipse
// Public License v. 2.0 are satisfied: GNU General Public License, version 2
// with the GNU Classpath Exception which is available at
// https://www.gnu.org/software/classpath/license.html.
//
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-only WITH Classpath-exception-2.0
// *****************************************************************************

import { ThemeIcon } from '@theia/monaco-editor-core/esm/vs/platform/theme/common/themeService';

// @monaco-uplift
// Keep this up-to-date with the table at https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
const codeIconMap: Record<string, string> = {
    'accounts-view-bar-icon': 'account',
    'breakpoints-activate': 'activate-breakpoints',
    'breakpoints-remove-all': 'close-all',
    'breakpoints-view-icon': 'debug-alt',
    'callhierarchy-incoming': 'call-incoming',
    'callhierarchy-outgoing': 'call-outgoing',
    'callstack-view-icon': 'debug-alt',
    'callstack-view-session': 'bug',
    'comments-view-icon': 'comment-discussion',
    'debug-breakpoint': 'debug-breakpoint',
    'debug-breakpoint-conditional': 'debug-breakpoint-conditional',
    'debug-breakpoint-conditional-disabled': 'debug-breakpoint-conditional-disabled',
    'debug-breakpoint-conditional-verified': 'debug-breakpoint-conditional-unverified',
    'debug-breakpoint-data': 'debug-breakpoint-data',
    'debug-breakpoint-data-disabled': 'debug-breakpoint-data-disabled',
    'debug-breakpoint-data-unverified': 'debug-breakpoint-data-unverified',
    'debug-breakpoint-disabled': 'debug-breakpoint-disabled',
    'debug-breakpoint-function': 'debug-breakpoint-function',
    'debug-breakpoint-function-disabled': 'debug-breakpoint-function-disabled',
    'debug-breakpoint-function-unverified': 'debug-breakpoint-function-unverified',
    'debug-breakpoint-log': 'debug-breakpoint-log',
    'debug-breakpoint-log-disabled': 'debug-breakpoint-log-disabled',
    'debug-breakpoint-log-unverified': 'debug-breakpoint-log-unverified',
    'debug-breakpoint-unsupported': 'debug-breakpoint-unsupported',
    'debug-breakpoint-unverified': 'debug-breakpoint-unverified',
    'debug-collapse-all': 'collapse-all',
    'debug-configure': 'gear',
    'debug-console-clear-all': 'clear-all',
    'debug-console-evaluation-input': 'arrow-small-right',
    'debug-console-evaluation-prompt': 'chevron-right',
    'debug-console-view-icon': 'debug-console',
    'debug-continue': 'debug-continue',
    'debug-disconnect': 'debug-disconnect',
    'debug-gripper': 'gripper',
    'debug-hint': 'debug-hint',
    'debug-pause': 'debug-pause',
    'debug-restart': 'debug-restart',
    'debug-restart-frame': 'debug-restart-frame',
    'debug-reverse-continue': 'debug-reverse-continue',
    'debug-stackframe': 'debug-stackframe',
    'debug-stackframe-focused': 'debug-stackframe-focused',
    'debug-start': 'debug-start',
    'debug-step-back': 'debug-step-back',
    'debug-step-into': 'debug-step-into',
    'debug-step-out': 'debug-step-out',
    'debug-step-over': 'debug-step-over',
    'debug-stop': 'debug-stop',
    'default-view-icon': 'window',
    'diff-editor-next-change': 'arrow-down',
    'diff-editor-previous-change': 'arrow-up',
    'diff-editor-toggle-whitespace': 'whitespace',
    'diff-insert': 'add',
    'diff-remove': 'remove',
    'diff-review-close': 'close',
    'diff-review-insert': 'add',
    'diff-review-remove': 'remove',
    'explorer-view-icon': 'files',
    'extensions-clear-search-results': 'clear-all',
    'extensions-configure-recommended': 'pencil',
    'extensions-filter': 'filter',
    'extensions-info-message': 'info',
    'extensions-install-count': 'cloud-download',
    'extensions-install-local-in-remote': 'cloud-download',
    'extensions-install-workspace-recommended': 'cloud-download',
    'extensions-manage': 'gear',
    'extensions-rating': 'star',
    'extensions-refresh': 'refresh',
    'extensions-remote': 'remote',
    'extensions-star-empty': 'star-empty',
    'extensions-star-full': 'star-full',
    'extensions-star-half': 'star-half',
    'extensions-sync-enabled': 'sync',
    'extensions-sync-ignored': 'sync-ignored',
    'extensions-view-icon': 'extensions',
    'extensions-warning-message': 'warning',
    'find-collapsed': 'chevron-right',
    'find-expanded': 'chevron-down',
    'find-next-match': 'arrow-down',
    'find-previous-match': 'arrow-up',
    'find-replace': 'replace',
    'find-replace-all': 'replace-all',
    'find-selection': 'selection',
    'folding-collapsed': 'chevron-right',
    'folding-expanded': 'chevron-down',
    'getting-started-beginner': 'lightbulb',
    'getting-started-codespaces': 'github',
    'getting-started-item-checked': 'pass-filled',
    'getting-started-item-unchecked': 'circle-large-outline',
    'getting-started-setup': 'heart',
    'goto-next-location': 'arrow-down',
    'goto-previous-location': 'arrow-up',
    'keybindings-add': 'add',
    'keybindings-edit': 'edit',
    'keybindings-record-keys': 'record-keys',
    'keybindings-sort': 'sort-precedence',
    'loaded-scripts-view-icon': 'debug-alt',
    'marker-navigation-next': 'chevron-down',
    'marker-navigation-previous': 'chevron-up',
    'markers-view-filter': 'filter',
    'markers-view-icon': 'warning',
    'markers-view-multi-line-collapsed': 'chevron-down',
    'markers-view-multi-line-expanded': 'chevron-up',
    'notebook-clear': 'clear-all',
    'notebook-collapsed': 'chevron-right',
    'notebook-delete-cell': 'trash',
    'notebook-edit': 'pencil',
    'notebook-execute': 'play',
    'notebook-execute-all': 'run-all',
    'notebook-expanded': 'chevron-down',
    'notebook-kernel-configure': 'settings-gear',
    'notebook-kernel-select': 'server-environment',
    'notebook-mimetype': 'code',
    'notebook-move-down': 'arrow-down',
    'notebook-move-up': 'arrow-up',
    'notebook-open-as-text': 'file-code',
    'notebook-render-output': 'preview',
    'notebook-revert': 'discard',
    'notebook-split-cell': 'split-vertical',
    'notebook-state-error': 'error',
    'notebook-state-success': 'check',
    'notebook-stop': 'primitive-square',
    'notebook-stop-edit': 'check',
    'notebook-unfold': 'unfold',
    'notifications-clear': 'close',
    'notifications-clear-all': 'clear-all',
    'notifications-collapse': 'chevron-down',
    'notifications-configure': 'gear',
    'notifications-expand': 'chevron-up',
    'notifications-hide': 'chevron-down',
    'open-editors-view-icon': 'book',
    'outline-view-icon': 'symbol-class',
    'output-view-icon': 'output',
    'panel-close': 'close',
    'panel-maximize': 'chevron-up',
    'panel-restore': 'chevron-down',
    'parameter-hints-next': 'chevron-down',
    'parameter-hints-previous': 'chevron-up',
    'ports-forward-icon': 'plus',
    'ports-open-browser-icon': 'globe',
    'ports-stop-forward-icon': 'x',
    'ports-view-icon': 'plug',
    'preferences-clear-input': 'clear-all',
    'preferences-open-settings': 'go-to-file',
    'private-ports-view-icon': 'lock',
    'public-ports-view-icon': 'eye',
    'refactor-preview-view-icon': 'lightbulb',
    'remote-explorer-documentation': 'book',
    'remote-explorer-feedback': 'twitter',
    'remote-explorer-get-started': 'star',
    'remote-explorer-report-issues': 'comment',
    'remote-explorer-review-issues': 'issues',
    'remote-explorer-view-icon': 'remote-explorer',
    'review-comment-collapse': 'chevron-up',
    'run-view-icon': 'debug-alt',
    'search-clear-results': 'clear-all',
    'search-collapse-results': 'collapse-all',
    'search-details': 'ellipsis',
    'search-expand-results': 'expand-all',
    'search-hide-replace': 'chevron-right',
    'search-new-editor': 'new-file',
    'search-refresh': 'refresh',
    'search-remove': 'close',
    'search-replace': 'replace',
    'search-replace-all': 'replace-all',
    'search-show-context': 'list-selection',
    'search-show-replace': 'chevron-down',
    'search-stop': 'search-stop',
    'search-view-icon': 'search',
    'settings-add': 'add',
    'settings-discard': 'discard',
    'settings-edit': 'edit',
    'settings-folder-dropdown': 'triangle-down',
    'settings-group-collapsed': 'chevron-right',
    'settings-group-expanded': 'chevron-down',
    'settings-more-action': 'gear',
    'settings-remove': 'close',
    'settings-sync-view-icon': 'sync',
    'settings-view-bar-icon': 'settings-gear',
    'source-control-view-icon': 'source-control',
    'suggest-more-info': 'chevron-right',
    'tasks-list-configure': 'gear',
    'tasks-remove': 'close',
    'terminal-kill': 'trash',
    'terminal-new': 'add',
    'terminal-rename': 'gear',
    'terminal-view-icon': 'terminal',
    'test-view-icon': 'beaker',
    'testing-cancel-icon': 'close',
    'testing-debug-icon': 'debug-alt',
    'testing-error-icon': 'warning',
    'testing-failed-icon': 'close',
    'testing-passed-icon': 'pass',
    'testing-queued-icon': 'watch',
    'testing-run-all-icon': 'run-all',
    'testing-run-icon': 'run',
    'testing-show-as-list-icon': 'list-tree',
    'testing-skipped-icon': 'debug-step-over',
    'testing-unset-icon': 'circle-outline',
    'timeline-open': 'history',
    'timeline-pin': 'pin',
    'timeline-refresh': 'refresh',
    'timeline-unpin': 'pinned',
    'timeline-view-icon': 'history',
    'variables-view-icon': 'debug-alt',
    'view-pane-container-collapsed': 'chevron-right',
    'view-pane-container-expanded': 'chevron-down',
    'watch-expressions-add': 'add',
    'watch-expressions-add-function-breakpoint': 'add',
    'watch-expressions-remove-all': 'close-all',
    'watch-view-icon': 'debug-alt',
    'widget-close': 'close'
};

const originalAsCSSSelector = ThemeIcon.asCSSSelector;
const originalAsClassName = ThemeIcon.asClassName;
const originalAsClassNameArray = ThemeIcon.asClassNameArray;

function buildMappedIcon(icon: ThemeIcon): ThemeIcon {
    const id = codeIconMap[icon.id] ?? icon.id;
    const newIcon: ThemeIcon = {
        ...icon,
        id
    };
    return newIcon;
}

Object.assign(ThemeIcon, {
    asCSSSelector: (icon: ThemeIcon) => originalAsCSSSelector(buildMappedIcon(icon)),
    asClassName: (icon: ThemeIcon) => originalAsClassName(buildMappedIcon(icon)),
    asClassNameArray: (icon: ThemeIcon) => originalAsClassNameArray(buildMappedIcon(icon))
});
