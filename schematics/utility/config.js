"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const schematics_1 = require("@angular-devkit/schematics");
exports.configPath = '/.angular-cli.json';
function getConfig(host) {
    const configBuffer = host.read(exports.configPath);
    if (configBuffer === null) {
        throw new schematics_1.SchematicsException('Could not find .angular-cli.json');
    }
    const config = JSON.parse(configBuffer.toString());
    return config;
}
exports.getConfig = getConfig;
function getAppFromConfig(config, appIndexOrName) {
    if (!config.apps) {
        return null;
    }
    if (parseInt(appIndexOrName) >= 0) {
        return config.apps[parseInt(appIndexOrName)];
    }
    return config.apps.filter((app) => app.name === appIndexOrName)[0];
}
exports.getAppFromConfig = getAppFromConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW5zbC9Tb3VyY2VzL2hhbnNsL2RldmtpdC8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NjaGVtYXRpY3MvYW5ndWxhci91dGlsaXR5L2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7R0FNRztBQUNILDJEQUF1RTtBQWtiMUQsUUFBQSxVQUFVLEdBQUcsb0JBQW9CLENBQUM7QUFFL0MsbUJBQTBCLElBQVU7SUFDbEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBVSxDQUFDLENBQUM7SUFDM0MsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUIsTUFBTSxJQUFJLGdDQUFtQixDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBVEQsOEJBU0M7QUFFRCwwQkFBaUMsTUFBaUIsRUFBRSxjQUFzQjtJQUN4RSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBVkQsNENBVUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBTY2hlbWF0aWNzRXhjZXB0aW9uLCBUcmVlIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuXG5cbi8vIFRoZSBpbnRlcmZhY2VzIGJlbG93IGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgQW5ndWxhciBDTEkgY29uZmlndXJhdGlvbiBzY2hlbWFcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXItY2xpL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL0Bhbmd1bGFyL2NsaS9saWIvY29uZmlnL3NjaGVtYS5qc29uXG5leHBvcnQgaW50ZXJmYWNlIEFwcENvbmZpZyB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBhcHAuXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogRGlyZWN0b3J5IHdoZXJlIGFwcCBmaWxlcyBhcmUgcGxhY2VkLlxuICAgKi9cbiAgYXBwUm9vdD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgYXBwLlxuICAgKi9cbiAgcm9vdD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBvdXRwdXQgZGlyZWN0b3J5IGZvciBidWlsZCByZXN1bHRzLlxuICAgKi9cbiAgb3V0RGlyPzogc3RyaW5nO1xuICAvKipcbiAgICogTGlzdCBvZiBhcHBsaWNhdGlvbiBhc3NldHMuXG4gICAqL1xuICBhc3NldHM/OiAoc3RyaW5nIHwge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgcGF0dGVybiB0byBtYXRjaC5cbiAgICAgICAqL1xuICAgICAgZ2xvYj86IHN0cmluZztcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGRpciB0byBzZWFyY2ggd2l0aGluLlxuICAgICAgICovXG4gICAgICBpbnB1dD86IHN0cmluZztcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG91dHB1dCBwYXRoIChyZWxhdGl2ZSB0byB0aGUgb3V0RGlyKS5cbiAgICAgICAqL1xuICAgICAgb3V0cHV0Pzogc3RyaW5nO1xuICB9KVtdO1xuICAvKipcbiAgICogVVJMIHdoZXJlIGZpbGVzIHdpbGwgYmUgZGVwbG95ZWQuXG4gICAqL1xuICBkZXBsb3lVcmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCYXNlIHVybCBmb3IgdGhlIGFwcGxpY2F0aW9uIGJlaW5nIGJ1aWx0LlxuICAgKi9cbiAgYmFzZUhyZWY/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcnVudGltZSBwbGF0Zm9ybSBvZiB0aGUgYXBwLlxuICAgKi9cbiAgcGxhdGZvcm0/OiAoJ2Jyb3dzZXInIHwgJ3NlcnZlcicpO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIHN0YXJ0IEhUTUwgZmlsZS5cbiAgICovXG4gIGluZGV4Pzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIG1haW4gZW50cnktcG9pbnQgZmlsZS5cbiAgICovXG4gIG1haW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgcG9seWZpbGxzIGZpbGUuXG4gICAqL1xuICBwb2x5ZmlsbHM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgdGVzdCBlbnRyeS1wb2ludCBmaWxlLlxuICAgKi9cbiAgdGVzdD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBUeXBlU2NyaXB0IGNvbmZpZ3VyYXRpb24gZmlsZS5cbiAgICovXG4gIHRzY29uZmlnPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIFR5cGVTY3JpcHQgY29uZmlndXJhdGlvbiBmaWxlIGZvciB1bml0IHRlc3RzLlxuICAgKi9cbiAgdGVzdFRzY29uZmlnPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHByZWZpeCB0byBhcHBseSB0byBnZW5lcmF0ZWQgc2VsZWN0b3JzLlxuICAgKi9cbiAgcHJlZml4Pzogc3RyaW5nO1xuICAvKipcbiAgICogRXhwZXJpbWVudGFsIHN1cHBvcnQgZm9yIGEgc2VydmljZSB3b3JrZXIgZnJvbSBAYW5ndWxhci9zZXJ2aWNlLXdvcmtlci5cbiAgICovXG4gIHNlcnZpY2VXb3JrZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogR2xvYmFsIHN0eWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYnVpbGQuXG4gICAqL1xuICBzdHlsZXM/OiAoc3RyaW5nIHwge1xuICAgICAgaW5wdXQ/OiBzdHJpbmc7XG4gICAgICBbbmFtZTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICB9KVtdO1xuICAvKipcbiAgICogT3B0aW9ucyB0byBwYXNzIHRvIHN0eWxlIHByZXByb2Nlc3NvcnNcbiAgICovXG4gIHN0eWxlUHJlcHJvY2Vzc29yT3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogUGF0aHMgdG8gaW5jbHVkZS4gUGF0aHMgd2lsbCBiZSByZXNvbHZlZCB0byBwcm9qZWN0IHJvb3QuXG4gICAgICAgKi9cbiAgICAgIGluY2x1ZGVQYXRocz86IHN0cmluZ1tdO1xuICB9O1xuICAvKipcbiAgICogR2xvYmFsIHNjcmlwdHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGJ1aWxkLlxuICAgKi9cbiAgc2NyaXB0cz86IChzdHJpbmcgfCB7XG4gICAgICBpbnB1dDogc3RyaW5nO1xuICAgICAgW25hbWU6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgfSlbXTtcbiAgLyoqXG4gICAqIFNvdXJjZSBmaWxlIGZvciBlbnZpcm9ubWVudCBjb25maWcuXG4gICAqL1xuICBlbnZpcm9ubWVudFNvdXJjZT86IHN0cmluZztcbiAgLyoqXG4gICAqIE5hbWUgYW5kIGNvcnJlc3BvbmRpbmcgZmlsZSBmb3IgZW52aXJvbm1lbnQgY29uZmlnLlxuICAgKi9cbiAgZW52aXJvbm1lbnRzPzoge1xuICAgICAgW25hbWU6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgfTtcbiAgYXBwU2hlbGw/OiB7XG4gICAgYXBwOiBzdHJpbmc7XG4gICAgcm91dGU6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGlDb25maWcge1xuICAkc2NoZW1hPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIG9mIHRoZSBwcm9qZWN0LlxuICAgKi9cbiAgcHJvamVjdD86IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuXG4gICAgICAgKi9cbiAgICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgICAvKipcbiAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgcHJvamVjdCB3YXMgZWplY3RlZC5cbiAgICAgICAqL1xuICAgICAgZWplY3RlZD86IGJvb2xlYW47XG4gIH07XG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIG9mIHRoZSBkaWZmZXJlbnQgYXBwbGljYXRpb25zIGluIHRoaXMgcHJvamVjdC5cbiAgICovXG4gIGFwcHM/OiBBcHBDb25maWdbXTtcbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gZm9yIGVuZC10by1lbmQgdGVzdHMuXG4gICAqL1xuICBlMmU/OiB7XG4gICAgICBwcm90cmFjdG9yPzoge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFBhdGggdG8gdGhlIGNvbmZpZyBmaWxlLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbmZpZz86IHN0cmluZztcbiAgICAgIH07XG4gIH07XG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIHRvIGJlIHBhc3NlZCB0byBUU0xpbnQuXG4gICAqL1xuICBsaW50Pzoge1xuICAgICAgLyoqXG4gICAgICAgKiBGaWxlIGdsb2IocykgdG8gbGludC5cbiAgICAgICAqL1xuICAgICAgZmlsZXM/OiAoc3RyaW5nIHwgc3RyaW5nW10pO1xuICAgICAgLyoqXG4gICAgICAgKiBMb2NhdGlvbiBvZiB0aGUgdHNjb25maWcuanNvbiBwcm9qZWN0IGZpbGUuXG4gICAgICAgKiBXaWxsIGFsc28gdXNlIGFzIGZpbGVzIHRvIGxpbnQgaWYgJ2ZpbGVzJyBwcm9wZXJ0eSBub3QgcHJlc2VudC5cbiAgICAgICAqL1xuICAgICAgcHJvamVjdDogc3RyaW5nO1xuICAgICAgLyoqXG4gICAgICAgKiBMb2NhdGlvbiBvZiB0aGUgdHNsaW50Lmpzb24gY29uZmlndXJhdGlvbi5cbiAgICAgICAqL1xuICAgICAgdHNsaW50Q29uZmlnPzogc3RyaW5nO1xuICAgICAgLyoqXG4gICAgICAgKiBGaWxlIGdsb2IocykgdG8gaWdub3JlLlxuICAgICAgICovXG4gICAgICBleGNsdWRlPzogKHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgfVtdO1xuICAvKipcbiAgICogQ29uZmlndXJhdGlvbiBmb3IgdW5pdCB0ZXN0cy5cbiAgICovXG4gIHRlc3Q/OiB7XG4gICAgICBrYXJtYT86IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBQYXRoIHRvIHRoZSBrYXJtYSBjb25maWcgZmlsZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25maWc/OiBzdHJpbmc7XG4gICAgICB9O1xuICAgICAgY29kZUNvdmVyYWdlPzoge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEdsb2JzIHRvIGV4Y2x1ZGUgZnJvbSBjb2RlIGNvdmVyYWdlLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGV4Y2x1ZGU/OiBzdHJpbmdbXTtcbiAgICAgIH07XG4gIH07XG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBkZWZhdWx0IHZhbHVlcyBmb3IgZ2VuZXJhdGluZy5cbiAgICovXG4gIGRlZmF1bHRzPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZmlsZSBleHRlbnNpb24gdG8gYmUgdXNlZCBmb3Igc3R5bGUgZmlsZXMuXG4gICAgICAgKi9cbiAgICAgIHN0eWxlRXh0Pzogc3RyaW5nO1xuICAgICAgLyoqXG4gICAgICAgKiBIb3cgb2Z0ZW4gdG8gY2hlY2sgZm9yIGZpbGUgdXBkYXRlcy5cbiAgICAgICAqL1xuICAgICAgcG9sbD86IG51bWJlcjtcbiAgICAgIC8qKlxuICAgICAgICogVXNlIGxpbnQgdG8gZml4IGZpbGVzIGFmdGVyIGdlbmVyYXRpb25cbiAgICAgICAqL1xuICAgICAgbGludEZpeD86IGJvb2xlYW47XG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgYSBjbGFzcy5cbiAgICAgICAqL1xuICAgICAgY2xhc3M/OiB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU3BlY2lmaWVzIGlmIGEgc3BlYyBmaWxlIGlzIGdlbmVyYXRlZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzcGVjPzogYm9vbGVhbjtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgYSBjb21wb25lbnQuXG4gICAgICAgKi9cbiAgICAgIGNvbXBvbmVudD86IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGbGFnIHRvIGluZGljYXRlIGlmIGEgZGlyIGlzIGNyZWF0ZWQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgZmxhdD86IGJvb2xlYW47XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU3BlY2lmaWVzIGlmIGEgc3BlYyBmaWxlIGlzIGdlbmVyYXRlZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzcGVjPzogYm9vbGVhbjtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTcGVjaWZpZXMgaWYgdGhlIHN0eWxlIHdpbGwgYmUgaW4gdGhlIHRzIGZpbGUuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaW5saW5lU3R5bGU/OiBib29sZWFuO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNwZWNpZmllcyBpZiB0aGUgdGVtcGxhdGUgd2lsbCBiZSBpbiB0aGUgdHMgZmlsZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpbmxpbmVUZW1wbGF0ZT86IGJvb2xlYW47XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU3BlY2lmaWVzIHRoZSB2aWV3IGVuY2Fwc3VsYXRpb24gc3RyYXRlZ3kuXG4gICAgICAgICAgICovXG4gICAgICAgICAgdmlld0VuY2Fwc3VsYXRpb24/OiAoJ0VtdWxhdGVkJyB8ICdOYXRpdmUnIHwgJ05vbmUnKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTcGVjaWZpZXMgdGhlIGNoYW5nZSBkZXRlY3Rpb24gc3RyYXRlZ3kuXG4gICAgICAgICAgICovXG4gICAgICAgICAgY2hhbmdlRGV0ZWN0aW9uPzogKCdEZWZhdWx0JyB8ICdPblB1c2gnKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgYSBkaXJlY3RpdmUuXG4gICAgICAgKi9cbiAgICAgIGRpcmVjdGl2ZT86IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGbGFnIHRvIGluZGljYXRlIGlmIGEgZGlyIGlzIGNyZWF0ZWQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgZmxhdD86IGJvb2xlYW47XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU3BlY2lmaWVzIGlmIGEgc3BlYyBmaWxlIGlzIGdlbmVyYXRlZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzcGVjPzogYm9vbGVhbjtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgYSBndWFyZC5cbiAgICAgICAqL1xuICAgICAgZ3VhcmQ/OiB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmxhZyB0byBpbmRpY2F0ZSBpZiBhIGRpciBpcyBjcmVhdGVkLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGZsYXQ/OiBib29sZWFuO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNwZWNpZmllcyBpZiBhIHNwZWMgZmlsZSBpcyBnZW5lcmF0ZWQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgc3BlYz86IGJvb2xlYW47XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciBnZW5lcmF0aW5nIGFuIGludGVyZmFjZS5cbiAgICAgICAqL1xuICAgICAgaW50ZXJmYWNlPzoge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFByZWZpeCB0byBhcHBseSB0byBpbnRlcmZhY2UgbmFtZXMuIChpLmUuIEkpXG4gICAgICAgICAgICovXG4gICAgICAgICAgcHJlZml4Pzogc3RyaW5nO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgZ2VuZXJhdGluZyBhIG1vZHVsZS5cbiAgICAgICAqL1xuICAgICAgbW9kdWxlPzoge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZsYWcgdG8gaW5kaWNhdGUgaWYgYSBkaXIgaXMgY3JlYXRlZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBmbGF0PzogYm9vbGVhbjtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTcGVjaWZpZXMgaWYgYSBzcGVjIGZpbGUgaXMgZ2VuZXJhdGVkLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHNwZWM/OiBib29sZWFuO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgZ2VuZXJhdGluZyBhIHBpcGUuXG4gICAgICAgKi9cbiAgICAgIHBpcGU/OiB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmxhZyB0byBpbmRpY2F0ZSBpZiBhIGRpciBpcyBjcmVhdGVkLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGZsYXQ/OiBib29sZWFuO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNwZWNpZmllcyBpZiBhIHNwZWMgZmlsZSBpcyBnZW5lcmF0ZWQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgc3BlYz86IGJvb2xlYW47XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciBnZW5lcmF0aW5nIGEgc2VydmljZS5cbiAgICAgICAqL1xuICAgICAgc2VydmljZT86IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGbGFnIHRvIGluZGljYXRlIGlmIGEgZGlyIGlzIGNyZWF0ZWQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgZmxhdD86IGJvb2xlYW47XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU3BlY2lmaWVzIGlmIGEgc3BlYyBmaWxlIGlzIGdlbmVyYXRlZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzcGVjPzogYm9vbGVhbjtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFByb3BlcnRpZXMgdG8gYmUgcGFzc2VkIHRvIHRoZSBidWlsZCBjb21tYW5kLlxuICAgICAgICovXG4gICAgICBidWlsZD86IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBPdXRwdXQgc291cmNlbWFwcy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzb3VyY2VtYXBzPzogYm9vbGVhbjtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBCYXNlIHVybCBmb3IgdGhlIGFwcGxpY2F0aW9uIGJlaW5nIGJ1aWx0LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGJhc2VIcmVmPzogc3RyaW5nO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRoZSBzc2wga2V5IHVzZWQgYnkgdGhlIHNlcnZlci5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBwcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRW5hYmxlIGFuZCBkZWZpbmUgdGhlIGZpbGUgd2F0Y2hpbmcgcG9sbCB0aW1lIHBlcmlvZCAobWlsbGlzZWNvbmRzKS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBwb2xsPzogbnVtYmVyO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIERlbGV0ZSBvdXRwdXQgcGF0aCBiZWZvcmUgYnVpbGQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgZGVsZXRlT3V0cHV0UGF0aD86IGJvb2xlYW47XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRG8gbm90IHVzZSB0aGUgcmVhbCBwYXRoIHdoZW4gcmVzb2x2aW5nIG1vZHVsZXMuXG4gICAgICAgICAgICovXG4gICAgICAgICAgcHJlc2VydmVTeW1saW5rcz86IGJvb2xlYW47XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU2hvdyBjaXJjdWxhciBkZXBlbmRlbmN5IHdhcm5pbmdzIG9uIGJ1aWxkcy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzaG93Q2lyY3VsYXJEZXBlbmRlbmNpZXM/OiBib29sZWFuO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFVzZSBhIHNlcGFyYXRlIGJ1bmRsZSBjb250YWluaW5nIGNvZGUgdXNlZCBhY3Jvc3MgbXVsdGlwbGUgYnVuZGxlcy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb21tb25DaHVuaz86IGJvb2xlYW47XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVXNlIGZpbGUgbmFtZSBmb3IgbGF6eSBsb2FkZWQgY2h1bmtzLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIG5hbWVkQ2h1bmtzPzogYm9vbGVhbjtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFByb3BlcnRpZXMgdG8gYmUgcGFzc2VkIHRvIHRoZSBzZXJ2ZSBjb21tYW5kLlxuICAgICAgICovXG4gICAgICBzZXJ2ZT86IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgcG9ydCB0aGUgYXBwbGljYXRpb24gd2lsbCBiZSBzZXJ2ZWQgb24uXG4gICAgICAgICAgICovXG4gICAgICAgICAgcG9ydD86IG51bWJlcjtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgaG9zdCB0aGUgYXBwbGljYXRpb24gd2lsbCBiZSBzZXJ2ZWQgb24uXG4gICAgICAgICAgICovXG4gICAgICAgICAgaG9zdD86IHN0cmluZztcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBFbmFibGVzIHNzbCBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHNzbD86IGJvb2xlYW47XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlIHNzbCBrZXkgdXNlZCBieSB0aGUgc2VydmVyLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHNzbEtleT86IHN0cmluZztcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgc3NsIGNlcnRpZmljYXRlIHVzZWQgYnkgdGhlIHNlcnZlci5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzc2xDZXJ0Pzogc3RyaW5nO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFByb3h5IGNvbmZpZ3VyYXRpb24gZmlsZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBwcm94eUNvbmZpZz86IHN0cmluZztcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFByb3BlcnRpZXMgYWJvdXQgc2NoZW1hdGljcy5cbiAgICAgICAqL1xuICAgICAgc2NoZW1hdGljcz86IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgc2NoZW1hdGljcyBjb2xsZWN0aW9uIHRvIHVzZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb2xsZWN0aW9uPzogc3RyaW5nO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRoZSBuZXcgYXBwIHNjaGVtYXRpYy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBuZXdBcHA/OiBzdHJpbmc7XG4gICAgICB9O1xuICB9O1xuICAvKipcbiAgICogU3BlY2lmeSB3aGljaCBwYWNrYWdlIG1hbmFnZXIgdG9vbCB0byB1c2UuXG4gICAqL1xuICBwYWNrYWdlTWFuYWdlcj86ICgnbnBtJyB8ICdjbnBtJyB8ICd5YXJuJyB8ICdkZWZhdWx0Jyk7XG4gIC8qKlxuICAgKiBBbGxvdyBwZW9wbGUgdG8gZGlzYWJsZSBjb25zb2xlIHdhcm5pbmdzLlxuICAgKi9cbiAgd2FybmluZ3M/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNob3cgYSB3YXJuaW5nIHdoZW4gdGhlIHVzZXIgZW5hYmxlZCB0aGUgLS1obXIgb3B0aW9uLlxuICAgICAgICovXG4gICAgICBobXJXYXJuaW5nPzogYm9vbGVhbjtcbiAgICAgIC8qKlxuICAgICAgICogU2hvdyBhIHdhcm5pbmcgd2hlbiB0aGUgbm9kZSB2ZXJzaW9uIGlzIGluY29tcGF0aWJsZS5cbiAgICAgICAqL1xuICAgICAgbm9kZURlcHJlY2F0aW9uPzogYm9vbGVhbjtcbiAgICAgIC8qKlxuICAgICAgICogU2hvdyBhIHdhcm5pbmcgd2hlbiB0aGUgdXNlciBpbnN0YWxsZWQgYW5ndWxhci1jbGkuXG4gICAgICAgKi9cbiAgICAgIHBhY2thZ2VEZXByZWNhdGlvbj86IGJvb2xlYW47XG4gICAgICAvKipcbiAgICAgICAqIFNob3cgYSB3YXJuaW5nIHdoZW4gdGhlIGdsb2JhbCB2ZXJzaW9uIGlzIG5ld2VyIHRoYW4gdGhlIGxvY2FsIG9uZS5cbiAgICAgICAqL1xuICAgICAgdmVyc2lvbk1pc21hdGNoPzogYm9vbGVhbjtcbiAgICAgIC8qKlxuICAgICAgICogU2hvdyBhIHdhcm5pbmcgd2hlbiB0aGUgVHlwZVNjcmlwdCB2ZXJzaW9uIGlzIGluY29tcGF0aWJsZVxuICAgICAgICovXG4gICAgICB0eXBlc2NyaXB0TWlzbWF0Y2g/OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgY29uZmlnUGF0aCA9ICcvLmFuZ3VsYXItY2xpLmpzb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnKGhvc3Q6IFRyZWUpOiBDbGlDb25maWcge1xuICBjb25zdCBjb25maWdCdWZmZXIgPSBob3N0LnJlYWQoY29uZmlnUGF0aCk7XG4gIGlmIChjb25maWdCdWZmZXIgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hdGljc0V4Y2VwdGlvbignQ291bGQgbm90IGZpbmQgLmFuZ3VsYXItY2xpLmpzb24nKTtcbiAgfVxuXG4gIGNvbnN0IGNvbmZpZyA9IEpTT04ucGFyc2UoY29uZmlnQnVmZmVyLnRvU3RyaW5nKCkpO1xuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBGcm9tQ29uZmlnKGNvbmZpZzogQ2xpQ29uZmlnLCBhcHBJbmRleE9yTmFtZTogc3RyaW5nKTogQXBwQ29uZmlnIHwgbnVsbCB7XG4gIGlmICghY29uZmlnLmFwcHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChwYXJzZUludChhcHBJbmRleE9yTmFtZSkgPj0gMCkge1xuICAgIHJldHVybiBjb25maWcuYXBwc1twYXJzZUludChhcHBJbmRleE9yTmFtZSldO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5hcHBzLmZpbHRlcigoYXBwKSA9PiBhcHAubmFtZSA9PT0gYXBwSW5kZXhPck5hbWUpWzBdO1xufVxuIl19