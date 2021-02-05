#STEAM ACHIEVEMENT NOTIFIER - SYSTRAY SCRIPT
#Original script created by AdamTheAutomator (adamtheautomator.com). This script was edited using the original script found here: https://adamtheautomator.com/powershell-form/
#This is not an original script, was not written by me and I do not take credit for this script.

Add-Type -AssemblyName 'System.Windows.Forms'

Add-Type -Name Window -Namespace Console -MemberDefinition '
    [DllImport("Kernel32.dll")]
    public static extern IntPtr GetConsoleWindow();
 
    [DllImport("user32.dll")]
    public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);
'
 
function Start-ShowConsole {
    $PSConsole = [Console.Window]::GetConsoleWindow()
    [Console.Window]::ShowWindow($PSConsole, 5)
}
 
function Start-HideConsole {
    $PSConsole = [Console.Window]::GetConsoleWindow()
    [Console.Window]::ShowWindow($PSConsole, 0)
}

function New-MenuItem{
    param(
        [string]
        $Text = "Placeholder Text",
        
        [switch]
        $ExitOnly = $false
    )

    $MenuItem = New-Object System.Windows.Forms.MenuItem

    if($Text){
        $MenuItem.Text = $Text
    }

    if($ExitOnly){
        $MenuItem.Add_Click({
            $Form.Close()
            $SystrayLauncher.Dispose()
            Stop-Process -Name "powershell"
            Stop-Process $PID
        })
    }

    $MenuItem
}

$apikeycheck = (Get-Content "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\apikey.txt");
$steam64check = (Get-Content "$env:LOCALAPPDATA\SteamAchievementNotifier\Store\steam64id.txt");

$Form = New-Object System.Windows.Forms.Form

$Form.BackColor = "Magenta"
$Form.TransparencyKey = "Magenta"
$Form.ShowInTaskbar = $false
$Form.FormBorderStyle = "None"

$SystrayLauncher = New-Object System.Windows.Forms.NotifyIcon
$SystrayIcon = "$env:LOCALAPPDATA\SteamAchievementNotifier\steamcheev.ico"
$SystrayLauncher.Icon = $SystrayIcon
$SystrayLauncher.Text = "Steam Achievement Notifier"
$SystrayLauncher.Visible = $true

$ContextMenu = New-Object System.Windows.Forms.ContextMenu

$ExitLauncher = New-MenuItem -Text "Exit" -ExitOnly

$ContextMenu.MenuItems.AddRange($ExitLauncher)

$SystrayLauncher.ContextMenu = $ContextMenu

& Start-Process "$PSScriptRoot\syslaunch.ps1" -WindowStyle Hidden;

if ($apikeycheck -eq $null) {

    $Form.Close()
    $SystrayLauncher.Dispose()
    Stop-Process $PID

    }

if ($steam64check -eq $null) {

    $Form.Close()
    $SystrayLauncher.Dispose()
    Stop-Process $PID

    }

Start-HideConsole
$Form.ShowDialog() > $null
Start-ShowConsole