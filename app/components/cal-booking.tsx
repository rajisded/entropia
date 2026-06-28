"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "new" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#080808" },
          dark: { "cal-brand": "#ffffff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="new"
      calLink="entropiademo/new"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
    />
  );
}
