# Vericore Website Launch Checklist

## Pre-publication verification

✓ **Local build validation**
- `npm run check` passes
- `npm run build` succeeds
- `npm run verify:routes` confirms all required routes exist

✓ **Route verification**
- index.html (home)
- capabilities/index.html
- architecture/index.html
- demo/index.html
- docs/index.html
- how-to-use/index.html
- releases/index.html
- security/index.html
- 404.html

✓ **Metadata & SEO**
- Open Graph tags present
- Twitter card metadata configured
- Canonical URLs set correctly
- Schema.org structured data included
- Social preview image available

✓ **Navigation & Links**
- All internal links use base path `/Vericore-Website/`
- Navigation correctly highlights active page
- No relative link issues
- CTA buttons point to correct destinations

✓ **Product Claims Alignment**
- All capabilities match v0.7.0 shipped features
- No unreleased roadmap claims
- Trust and security statements are accurate
- Release information is current

✓ **Accessibility**
- Skip-to-content link present
- ARIA labels on interactive elements
- Focus states visible
- Reduced motion respected
- Color contrast sufficient

✓ **Performance**
- No unnecessary external dependencies
- Static assets only
- Minimal JavaScript
- Fast initial page load

## Post-deployment smoke test

 After merge to main and GitHub Pages publication:

1. Open https://sonii-shivansh.github.io/Vericore-Website/
2. Verify homepage loads with correct styling
3. Test navigation across all 8 primary pages
4. Verify docs page reference links open correctly
5. Check release page links to GitHub releases
6. Verify social preview by sharing a page
7. Confirm 404 page works correctly

## Deployment workflow

1. **Push to branch** → PR to main
2. **CI runs** → Type check + build validation
3. **Route verification** → Confirms all routes exist
4. **Merge approved** → Merge to main
5. **Deploy workflow triggers** → GitHub Pages publishes automatically
6. **Site goes live** → Available at GitHub Pages URL

## Ongoing maintenance

Keep the site synchronized with Vericore repository:
- Monitor v0.7.0 release updates
- Update capabilities if new features ship
- Sync documentation links
- Review and update claims if implementation changes
- Monitor GitHub Pages deployment status

---

**Status**: Ready for publication
**Branch**: fix/vericore-website-readiness
**Last updated**: 2026-10-04
