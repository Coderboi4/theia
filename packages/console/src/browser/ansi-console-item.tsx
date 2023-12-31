// *****************************************************************************
// Copyright (C) 2018 TypeFox and others.
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

import * as React from '@theia/core/shared/react';
import * as DOMPurify from '@theia/core/shared/dompurify';
import { ConsoleItem } from './console-session';
import { Severity } from '@theia/core/lib/common/severity';
import Anser = require('anser');

export class AnsiConsoleItem implements ConsoleItem {

    protected readonly htmlContent: string;

    constructor(
        public readonly content: string,
        public readonly severity?: Severity
    ) {
        this.htmlContent = new Anser().ansiToHtml(this.content, {
            use_classes: true,
            remove_empty: true
        });
    }

    get visible(): boolean {
        return !!this.htmlContent;
    }

    render(): React.ReactNode {
        return <div
            className='theia-console-ansi-console-item'
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.htmlContent) }} // eslint-disable-line react/no-danger
        />;
    }

}
