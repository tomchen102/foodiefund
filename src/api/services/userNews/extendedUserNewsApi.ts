import { apiExtensionFactory } from "@/api/extensions/createApiExtension";

import { userNewsApi } from ".";

export const extendedUserNewsApi = apiExtensionFactory(userNewsApi);
