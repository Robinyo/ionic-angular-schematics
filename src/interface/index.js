"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const stringUtils = require("../strings");
function default_1(options) {
    options.prefix = options.prefix ? options.prefix : '';
    options.type = !!options.type ? `.${options.type}` : '';
    options.path = options.path ? core_1.normalize(options.path) : options.path;
    const sourceDir = options.sourceDir;
    if (!sourceDir) {
        throw new schematics_1.SchematicsException(`sourceDir option is required.`);
    }
    const templateSource = schematics_1.apply(schematics_1.url('./files'), [
        schematics_1.template(Object.assign({}, stringUtils, options)),
        schematics_1.move(sourceDir),
    ]);
    return schematics_1.chain([
        schematics_1.branchAndMerge(schematics_1.chain([
            schematics_1.mergeWith(templateSource),
        ])),
    ]);
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbnNsL1NvdXJjZXMvaGFuc2wvZGV2a2l0LyIsInNvdXJjZXMiOlsicGFja2FnZXMvc2NoZW1hdGljcy9hbmd1bGFyL2ludGVyZmFjZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7R0FNRztBQUNILCtDQUFpRDtBQUNqRCwyREFVb0M7QUFDcEMsMENBQTBDO0FBSTFDLG1CQUF5QixPQUF5QjtJQUNoRCxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hELE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDckUsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDZixNQUFNLElBQUksZ0NBQW1CLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsTUFBTSxjQUFjLEdBQUcsa0JBQUssQ0FBQyxnQkFBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzNDLHFCQUFRLG1CQUNILFdBQVcsRUFDWCxPQUFPLEVBQ1Y7UUFDRixpQkFBSSxDQUFDLFNBQVMsQ0FBQztLQUNoQixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsa0JBQUssQ0FBQztRQUNYLDJCQUFjLENBQUMsa0JBQUssQ0FBQztZQUNuQixzQkFBUyxDQUFDLGNBQWMsQ0FBQztTQUMxQixDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7QUFDTCxDQUFDO0FBdEJELDRCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7XG4gIFJ1bGUsXG4gIFNjaGVtYXRpY3NFeGNlcHRpb24sXG4gIGFwcGx5LFxuICBicmFuY2hBbmRNZXJnZSxcbiAgY2hhaW4sXG4gIG1lcmdlV2l0aCxcbiAgbW92ZSxcbiAgdGVtcGxhdGUsXG4gIHVybCxcbn0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0ICogYXMgc3RyaW5nVXRpbHMgZnJvbSAnLi4vc3RyaW5ncyc7XG5pbXBvcnQgeyBTY2hlbWEgYXMgSW50ZXJmYWNlT3B0aW9ucyB9IGZyb20gJy4vc2NoZW1hJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob3B0aW9uczogSW50ZXJmYWNlT3B0aW9ucyk6IFJ1bGUge1xuICBvcHRpb25zLnByZWZpeCA9IG9wdGlvbnMucHJlZml4ID8gb3B0aW9ucy5wcmVmaXggOiAnJztcbiAgb3B0aW9ucy50eXBlID0gISFvcHRpb25zLnR5cGUgPyBgLiR7b3B0aW9ucy50eXBlfWAgOiAnJztcbiAgb3B0aW9ucy5wYXRoID0gb3B0aW9ucy5wYXRoID8gbm9ybWFsaXplKG9wdGlvbnMucGF0aCkgOiBvcHRpb25zLnBhdGg7XG4gIGNvbnN0IHNvdXJjZURpciA9IG9wdGlvbnMuc291cmNlRGlyO1xuICBpZiAoIXNvdXJjZURpcikge1xuICAgIHRocm93IG5ldyBTY2hlbWF0aWNzRXhjZXB0aW9uKGBzb3VyY2VEaXIgb3B0aW9uIGlzIHJlcXVpcmVkLmApO1xuICB9XG5cbiAgY29uc3QgdGVtcGxhdGVTb3VyY2UgPSBhcHBseSh1cmwoJy4vZmlsZXMnKSwgW1xuICAgIHRlbXBsYXRlKHtcbiAgICAgIC4uLnN0cmluZ1V0aWxzLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KSxcbiAgICBtb3ZlKHNvdXJjZURpciksXG4gIF0pO1xuXG4gIHJldHVybiBjaGFpbihbXG4gICAgYnJhbmNoQW5kTWVyZ2UoY2hhaW4oW1xuICAgICAgbWVyZ2VXaXRoKHRlbXBsYXRlU291cmNlKSxcbiAgICBdKSksXG4gIF0pO1xufVxuIl19