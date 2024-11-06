function logInfo(title, message) {
    console.info(`\n%c${title}%c\n\n${message}`,
        'color: #ffffff; background-color: #007acc; font-size: 16px; font-weight: bold; padding: 8px; border-radius: 4px;',
        'color: #ffffff; font-size: 14px')
}

function logInfoConsole() {
    logInfo('👋 Bienvenido/a mi sitio web!\nCV 1.2', '')
    logInfo('-> Created CV_1.0:', 'Project created(npm run build)\n\n- Vite + React\n- Tailwindcss\n- main.jsx\n- App.jsx\n')
    logInfo('-> Updated CV_1.1:', 'Setted Visual Structure\n')
    logInfo('-> Updated CV_1.2:', 'Setted activeTabs on EditorScreen\n')
    logInfo('-> Coming soon CV_1.3:', 'Create an API service\n')
}

export default logInfoConsole