# 🚀 Margareta Baraliuc — Automation Portfolio (Playwright + TypeScript)

[![Playwright Tests](https://img.shields.io/github/actions/workflow/status/margareta2022/Margareta-Baraliuc-Portfolio/playwright.yml?label=Playwright%20Tests)](https://github.com/margareta2022/Margareta-Baraliuc-Portfolio/actions)

🔗 Live Resume: [View my live resume](https://margareta2022.github.io/Margareta-Baraliuc-Portfolio/)


## 🧪 Test Coverage in This Repository

This repository includes practical Playwright + TypeScript examples demonstrating:

- Smoke testing for homepage validation
- End-to-end UI testing with TodoMVC
- API response validation using Playwright request context
- Cross-browser execution (Chromium, Firefox, WebKit)
- HTML reporting, screenshots, traces, and retry support
 ## 🧱 Framework Design
This project uses the Page Object Model (POM) to keep test logic clean, reusable, and maintainable. Page interactions are separated from test assertions to support scalable automation design.
## 🧰 Framework Utilities
This project includes reusable helper methods and centralized test data to support cleaner, more maintainable Playwright tests. The structure is designed to reflect scalable automation practices used in real-world QA engineering environments.

### Test Structure
- `tests/smoke` → critical smoke coverage
- `tests/e2e` → user workflow validation
- `tests/api` → backend/API validation

## 🔄 CI/CD with GitHub Actions

This project includes automated test execution using GitHub Actions.  
Tests can run automatically on every push and pull request, helping validate quality continuously.

### Workflow coverage
- Install dependencies
- Install Playwright browsers
- Run Playwright test suite
- Generate HTML report
- Upload test artifacts for review

This setup reflects CI/CD practices used in real-world automation frameworks.