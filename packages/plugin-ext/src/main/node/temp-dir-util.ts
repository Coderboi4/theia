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
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';

export function getTempDir(name: string): string {
    let tempDir = os.tmpdir();
    // for mac os 'os.tmpdir()' return symlink, but we need real path
    if (process.platform === 'darwin') {
        tempDir = fs.realpathSync(tempDir);
    }
    return path.resolve(tempDir, name);
}
