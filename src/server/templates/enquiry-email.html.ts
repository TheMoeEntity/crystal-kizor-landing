import "server-only";
import { EMAIL_THEME as t } from "@/constants/email-theme";
import type { EmailRow, EnquiryEmailModel } from "@/types/email";
import { escapeHtml, escapeMultiline } from "@/utils/html";

// Email HTML is its own world: tables for layout, inline styles only, no web fonts,
// no flexbox or grid. Every value from the visitor is escaped before it is inserted.

const font = `font-family:${t.fontStack};`;

function renderRow(row: EmailRow): string {
  const value = escapeHtml(row.value);
  const content = row.href
    ? `<a href="${escapeHtml(row.href)}" style="color:${t.ink};text-decoration:underline;">${value}</a>`
    : value;

  return `
    <tr>
      <td valign="top" style="${font}width:150px;padding:12px 16px 12px 0;border-bottom:1px solid ${t.rule};color:${t.stone};font-size:14px;line-height:20px;">${escapeHtml(row.label)}</td>
      <td valign="top" style="${font}padding:12px 0;border-bottom:1px solid ${t.rule};color:${t.ink};font-size:15px;line-height:22px;">${content}</td>
    </tr>`;
}

export function renderEnquiryHtml(model: EnquiryEmailModel): string {
  const replyHref = `mailto:${model.email}?subject=${encodeURIComponent("Re: your enquiry")}`;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>${escapeHtml(model.subject)}</title>
</head>
<body style="margin:0;padding:0;background:${t.concrete};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">${escapeHtml(model.preheader)}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${t.concrete};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:${t.limewash};border-radius:4px;">
          <tr>
            <td style="padding:32px 40px 24px;border-bottom:1px solid ${t.rule};">
              <img src="${escapeHtml(model.logoUrl)}" width="216" height="19" alt="Crystal Kizor" style="display:block;border:0;outline:none;color:${t.ink};font-family:Georgia,serif;font-size:20px;letter-spacing:2px;">
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px 0;">
              <span style="${font}display:inline-block;background:${t.canopy};color:${t.limewash};font-size:12px;line-height:12px;font-weight:600;padding:8px 12px;border-radius:2px;">${escapeHtml(model.intentTag)}</span>
              <h1 style="${font}margin:20px 0 6px;color:${t.ink};font-size:26px;line-height:32px;font-weight:700;">New enquiry from ${escapeHtml(model.name)}</h1>
              <p style="${font}margin:0;color:${t.stone};font-size:15px;line-height:22px;">${escapeHtml(model.intentLabel)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${model.rows.map(renderRow).join("")}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 40px 0;">
              <p style="${font}margin:0 0 10px;color:${t.stone};font-size:14px;line-height:20px;">Message</p>
              <div style="${font}border-left:3px solid ${t.ochre};padding:2px 0 2px 16px;color:${t.ink};font-size:16px;line-height:26px;">${escapeMultiline(model.message)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px 40px;">
              <a href="${escapeHtml(replyHref)}" style="${font}display:inline-block;background:${t.canopy};color:${t.limewash};text-decoration:none;font-size:15px;line-height:15px;font-weight:600;padding:15px 24px;border-radius:2px;">Reply to ${escapeHtml(model.firstName)}</a>
            </td>
          </tr>
        </table>
        <p style="${font}max-width:600px;margin:20px auto 0;color:${t.stone};font-size:12px;line-height:18px;">Sent from the enquiry form at ${escapeHtml(model.siteHost)}. Replying to this email goes straight to ${escapeHtml(model.name)}.</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
