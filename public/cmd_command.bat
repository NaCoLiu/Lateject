for /f "tokens=1,2,* " %%i in ('reg query HKEY_CURRENT_USER\Software\Valve\Steam /v SteamPath ^| find /i "SteamPath"') do (set PATH=%%k)

echo %PATH%