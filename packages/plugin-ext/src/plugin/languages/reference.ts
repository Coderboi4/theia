// *****************************************************************************
// Copyright (C) 2018 Red Hat, Inc. and others.
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

import { URI } from '@theia/core/shared/vscode-uri';
import * as theia from '@theia/plugin';
import { DocumentsExtImpl } from '../documents';
import { ReferenceContext, Location } from '../../common/plugin-api-rpc-model';
import * as Converter from '../type-converters';
import { Position } from '../../common/plugin-api-rpc';
import { isLocationArray } from './util';

export class ReferenceAdapter {

    constructor(
        private readonly provider: theia.ReferenceProvider,
        private readonly documents: DocumentsExtImpl
    ) { }

    provideReferences(resource: URI, position: Position, context: ReferenceContext, token: theia.CancellationToken): Promise<Location[] | undefined> {
        const documentData = this.documents.getDocumentData(resource);
        if (!documentData) {
            return Promise.reject(new Error(`There is no document for ${resource}`));
        }

        const document = documentData.document;
        const zeroBasedPosition = Converter.toPosition(position);

        return Promise.resolve(this.provider.provideReferences(document, zeroBasedPosition, context, token)).then(reference => {
            if (!reference) {
                return undefined;
            }

            if (isLocationArray(reference)) {
                const locations: Location[] = [];

                for (const location of reference) {
                    locations.push(Converter.fromLocation(location));
                }

                return locations;
            }
        });
    }

}
