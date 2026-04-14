const getBasePath = () => {
  const publicUrl = process.env.PUBLIC_URL || "";

  if (!publicUrl) {
    return "";
  }

  try {
    return new URL(publicUrl).pathname.replace(/\/$/, "");
  } catch (error) {
    return publicUrl.replace(/\/$/, "");
  }
};

const basePath = getBasePath();

export const HOME_ROUTE = basePath || "/";
export const PC_BUILD_ROUTE = `${basePath}/pc-build`;

export const isPcBuildPath = (pathname = "") =>
  pathname.replace(/\/$/, "").endsWith("/pc-build");

export const restoreRedirectedPath = () => {
  if (typeof window === "undefined") {
    return;
  }

  const { search } = window.location;

  if (!search.startsWith("?/")) {
    return;
  }

  const restoredPath = `/${decodeURIComponent(search.slice(2)).replace(
    /~and~/g,
    "&"
  )}`;

  window.history.replaceState(null, "", restoredPath);
};
