Set-Location -Path "d:\Alee Projcets\celo april\mini-pay-app"

# 1
New-Item -ItemType Directory -Force -Path "contracts" | Out-Null
Copy-Item "..\DailyStreak.sol" -Destination "contracts\DailyStreak.sol" -Force
git add .
git commit -m "feat(contract): add DailyStreak smart contract base"

# 2
$contractPath = "contracts\DailyStreak.sol"
(Get-Content $contractPath) -replace 'contract DailyStreak \{', "contract DailyStreak {`n    // @title DailyStreak`n    // @notice A contract for daily checkins" | Set-Content $contractPath
git add .
git commit -m "docs(contract): add title and notice natspec to DailyStreak"

# 3
(Get-Content $contractPath) -replace 'mapping\(address => uint256\) public streaks;', "mapping(address => uint256) public streaks; // user to streak count" | Set-Content $contractPath
git add .
git commit -m "docs(contract): clarify streaks mapping purpose"

# 4
Set-Content -Path "CHANGELOG.md" -Value "# Changelog`n`n## [Unreleased]`n- Initial project setup"
git add .
git commit -m "docs: initialize project changelog"

# 5
Add-Content -Path "README.md" -Value "`n`n## Project Architecture`nBuilt with Next.js, Tailwind CSS, and Solidity."
git add .
git commit -m "docs(readme): add project architecture section"

# 6
Add-Content -Path "README.md" -Value "`n`n## MiniPay Integration`nIntegrates MiniPay provider for seamless gas-fee abstracted transactions."
git add .
git commit -m "docs(readme): detail MiniPay integration benefits"

# 7
Add-Content -Path "README.md" -Value "`n`n## Smart Contract`nThe DailyStreak contract manages the logic for users to maintain a daily check-in sequence."
git add .
git commit -m "docs(readme): provide overview of DailyStreak contract"

# 8
$pagePath = "src\app\page.tsx"
(Get-Content $pagePath) -replace 'p-6 bg-\[radial-gradient', "p-8 bg-[radial-gradient" | Set-Content $pagePath
git add .
git commit -m "style(ui): increase main container padding for better spacing"

# 9
(Get-Content $pagePath) -replace 'duration-300', "duration-500" | Set-Content $pagePath
git add .
git commit -m "style(ui): smooth out button transition duration"

# 10
(Get-Content $pagePath) -replace 'scale-95', "scale-90" | Set-Content $pagePath
git add .
git commit -m "style(ui): adjust loading state scale transform"

# 11
(Get-Content $pagePath) -replace '// MiniPay injection check', "// Check if injected provider is MiniPay wallet environment" | Set-Content $pagePath
git add .
git commit -m "docs(ui): expand comment on MiniPay provider detection"

# 12
New-Item -ItemType Directory -Force -Path "src\utils" | Out-Null
Set-Content -Path "src\utils\index.ts" -Value "// Utility functions"
git add .
git commit -m "chore: setup utils directory for shared functions"

# 13
Add-Content -Path "src\utils\index.ts" -Value "`nexport const formatAddress = (addr: string) => addr.slice(0, 6) + '...' + addr.slice(-4);"
git add .
git commit -m "feat(utils): add formatAddress helper function"

# 14
(Get-Content $pagePath) -replace 'export default function Home', "// import { formatAddress } from '../utils';`nexport default function Home" | Set-Content $pagePath
git add .
git commit -m "refactor(ui): prepare for formatAddress utility usage"

# 15
Set-Content -Path "src\utils\constants.ts" -Value "export const CONTRACT_ADDRESS = '';"
git add .
git commit -m "feat(constants): add contract address configuration file"

# 16
(Get-Content "src\utils\constants.ts") -replace "''", "'0x0000000000000000000000000000000000000000'" | Set-Content "src\utils\constants.ts"
git add .
git commit -m "chore(constants): add placeholder for deployed contract address"

# 17
(Get-Content $contractPath) -replace '"You can only check in once every 24 hours."', '"Daily check-in cooldown active"' | Set-Content $contractPath
git add .
git commit -m "refactor(contract): optimize require statement error string"

# 18
(Get-Content $contractPath) -replace 'contract DailyStreak \{', "contract DailyStreak {`n    // Version: 1.0.0" | Set-Content $contractPath
git add .
git commit -m "docs(contract): add version indicator to smart contract"

# 19
Add-Content -Path "README.md" -Value "`n`n## Deployment`nNetwork: Celo Alfajores Testnet / Mainnet"
git add .
git commit -m "docs(readme): add deployment network information"

# 20
Set-Content -Path "contracts\ABI.json" -Value "[]"
git add .
git commit -m "feat: initialize empty ABI configuration file"

git push origin main
