# Remote connection to Windows

## RDP

- Search for `Remote Desktop Connection` in the start menu
- Enter the IP address of the remote machine
- Click on `Connect`
- Click on `Other user`
- Enter the username and password of the remote machine
- Click on `OK`

You can download the new version of the [Remote Desktop Connection from here](https://www.microsoft.com/store/productId/9WZDNCRFJ3PS). This app allows to save the credentials of the remote machine easily.

## SSH

[Source](https://www.vultr.com/docs/how-to-install-openssh-on-windows-server-2019-or-2022/)

- Open PowerShell as Administrator
- Paste the following command and press Enter:

    ```powershell
    Add-WindowsCapability -Online -Name OpenSSH.Server
    ```

    you should see the following output:

    ```powershell
    Path          :
    Online        : True
    RestartNeeded : False
    ```

- Allow port 22 incoming connections in the firewall
  - Open `Server Manager`
  - In `Tools` menu select `Windows Defender Firewall with Advanced Security`
  - Click on `Inbound Rules`
  - On the right pannel click on `New Rule...`
    - Rule Type: `Port`
    - Port and Protocols:
      - Does this rule apply to TCP or UDP? `TCP`
      - Does this rule apply to all local ports or specific local ports? `Specific local ports` and enter `22`
    - Action: `Allow the connection`
    - Profile: `Domain`, `Private` and `Public`
    - Name: `Allow SSh`
    - Click on `Finish`
- Start the SSH service
  - Open powershell as Administrator and paste the following command :
  
  ```powershell
  Start-Service sshd
  ```

you can now connect to the remote machine using SSH.

(Example `ssh -l Administrator localhost` or on another machine `ssh -l Administrator <IP address>`)
