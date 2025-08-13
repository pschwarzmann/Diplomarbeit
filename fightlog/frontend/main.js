// ===== FIGHTLOG - HAUPTANWENDUNG =====
// Diese Datei enthält die komplette Vue.js Anwendung
// Backend-Entwickler: Hier können echte API-Calls eingefügt werden

const { createApp } = Vue;

// Übersetzungen
const translations = {
    de: {
        login: "Anmelden",
        register: "Registrieren",
        username: "Benutzername",
        password: "Passwort",
        email: "E-Mail",
        role: "Rolle",
        student: "Schüler",
        trainer: "Trainer",
        admin: "Admin",
        stayLoggedIn: "Angemeldet bleiben",
        dashboard: "Dashboard",
        certificates: "Urkunden",
        specialCourses: "Sonderkurse",
        trainingHistory: "Trainingsverlauf",
        exams: "Prüfungen",
        goals: "Ziele",
        adminPanel: "Admin",
        users: "Benutzer",
        permissions: "Berechtigungen",
        verifyTrainer: "Als Trainer verifizieren",
        makeTrainer: "Zu Trainer machen",
        makeStudent: "Zu Schüler machen",
        addUser: "Benutzer hinzufügen",
        saveChanges: "Änderungen speichern",
        search: "Suchen",
        logout: "Abmelden",
        welcome: "Willkommen bei FightLog",
        subtitle: "Erfasse und verwalte deine Kampfsporterfolge",
        uploadCertificate: "Urkunde hochladen",
        certificateTitle: "Titel der Urkunde",
        certificateType: "Art der Urkunde",
        certificateDate: "Datum",
        certificateLevel: "Stufe/Level",
        certificateInstructor: "Trainer/Prüfer",
        uploadFile: "Datei hochladen",
        dragDropText: "Datei hier hineinziehen oder klicken zum Auswählen",
        supportedFormats: "Unterstützte Formate: PDF, JPG, PNG",
        examEntry: "Prüfungseintrag",
        examDate: "Prüfungsdatum",
        examLevel: "Prüfungsstufe",
        examCategory: "Kategorie",
        examScore: "Bewertung",
        examComments: "Kommentare",
        examInstructor: "Prüfer",
        filter: "Filter",
        applyFilter: "Filter anwenden",
        clearFilter: "Filter löschen",
        save: "Speichern",
        cancel: "Abbrechen",
        submit: "Absenden"
    },
    en: {
        login: "Login",
        register: "Register",
        username: "Username",
        password: "Password",
        email: "Email",
        role: "Role",
        student: "Student",
        trainer: "Trainer",
        stayLoggedIn: "Stay logged in",
        dashboard: "Dashboard",
        certificates: "Certificates",
        specialCourses: "Special Courses",
        trainingHistory: "Training History",
        exams: "Exams",
        goals: "Goals",
        logout: "Logout",
        welcome: "Welcome to FightLog",
        subtitle: "Record and manage your martial arts achievements",
        uploadCertificate: "Upload Certificate",
        certificateTitle: "Certificate Title",
        certificateType: "Certificate Type",
        certificateDate: "Date",
        certificateLevel: "Level",
        certificateInstructor: "Instructor/Examiner",
        uploadFile: "Upload File",
        dragDropText: "Drag file here or click to select",
        supportedFormats: "Supported formats: PDF, JPG, PNG",
        examEntry: "Exam Entry",
        examDate: "Exam Date",
        examLevel: "Exam Level",
        examCategory: "Category",
        examScore: "Score",
        examComments: "Comments",
        examInstructor: "Examiner",
        filter: "Filter",
        applyFilter: "Apply Filter",
        clearFilter: "Clear Filter",
        save: "Save",
        cancel: "Cancel",
        submit: "Submit"
    }
};

// Dummy-Daten für Demo
const demoData = {
    user: {
        id: 1,
        username: "admin",
        email: "admin@fightlog.com",
        role: "admin", // "schueler", "trainer" oder "admin"
        name: "Admin Trainer",
        school: "Kampfsport Akademie Berlin",
        beltLevel: "Schwarzgurt 5. Dan - Meister",
        permissions: ["manage_users", "manage_certificates", "manage_exams", "view_all_data", "approve_certificates", "edit_training_history"],
        verifiedTrainer: true
    },
    users: [
        {
            id: 1,
            username: "admin",
            email: "admin@fightlog.com",
            role: "admin",
            name: "Admin Trainer",
            school: "Kampfsport Akademie Berlin",
            beltLevel: "Schwarzgurt 5. Dan - Meister",
            permissions: ["manage_users", "manage_certificates", "manage_exams", "view_all_data", "approve_certificates", "edit_training_history"],
            verifiedTrainer: true
        },
        {
            id: 2,
            username: "trainer",
            email: "trainer@fightlog.com",
            role: "trainer",
            name: "Tom Trainer",
            school: "Kampfsport Akademie Berlin",
            beltLevel: "Schwarzgurt 2. Dan",
            permissions: ["manage_certificates", "manage_exams", "edit_training_history"],
            verifiedTrainer: true
        },
        {
            id: 3,
            username: "schueler",
            email: "schueler@fightlog.com",
            role: "schueler",
            name: "Sam Schüler",
            school: "Kampfsport Akademie Berlin",
            beltLevel: "Gelbgurt",
            permissions: [],
            verifiedTrainer: false
        }
    ],
    certificates: [
        {
            id: 1,
            title: "Gelbgurt Prüfung",
            type: "belt_exam",
            date: "2023-06-15",
            level: "Gelbgurt",
            instructor: "Hans Schmidt",
            fileUrl: "certificate_1.pdf",
            preview: "📄",
            status: "approved"
        },
        {
            id: 2,
            title: "Turnier Sieg - Berlin Open",
            type: "tournament",
            date: "2023-08-20",
            level: "Regional",
            instructor: "Max Müller",
            fileUrl: "certificate_2.jpg",
            preview: "🏆",
            status: "approved"
        },
        {
            id: 3,
            title: "Grüngurt Prüfung",
            type: "belt_exam",
            date: "2023-12-10",
            level: "Grüngurt",
            instructor: "Anna Weber",
            fileUrl: "certificate_3.pdf",
            preview: "📄",
            status: "pending"
        }
    ],
    exams: [
        {
            id: 1,
            date: "2023-06-15",
            level: "Gelbgurt",
            category: "Technik",
            score: 85,
            instructor: "Hans Schmidt",
            comments: "Sehr gute Grundtechniken, Verbesserung bei der Ausdauer nötig",
            status: "passed"
        },
        {
            id: 2,
            date: "2023-12-10",
            level: "Grüngurt",
            category: "Kampf",
            score: 92,
            instructor: "Anna Weber",
            comments: "Ausgezeichnete Kampftechniken, Führungsposition im Dojo",
            status: "passed"
        }
    ],
    trainingHistory: [
        {
            id: 1,
            date: "2024-03-25",
            duration: 90,
            type: "Techniktraining",
            instructor: "Hans Schmidt",
            focus: "Grundtechniken, Kata",
            notes: "Intensives Training der Grundstellungen"
        },
        {
            id: 2,
            date: "2024-03-23",
            duration: 120,
            type: "Kampftraining",
            instructor: "Anna Weber",
            focus: "Sparring, Wettkampfvorbereitung",
            notes: "Gute Fortschritte im Sparring"
        }
    ],
    specialCourses: [
        {
            id: 1,
            title: "Selbstverteidigung für Frauen",
            instructor: "Anna Weber",
            date: "2024-04-15",
            duration: "4 Stunden",
            maxParticipants: 12,
            currentParticipants: 8,
            price: "45€",
            description: "Spezieller Kurs für effektive Selbstverteidigung"
        },
        {
            id: 2,
            title: "Kampfrichter Ausbildung",
            instructor: "Hans Schmidt",
            date: "2024-05-10",
            duration: "8 Stunden",
            maxParticipants: 8,
            currentParticipants: 6,
            price: "120€",
            description: "Offizielle Ausbildung zum Kampfrichter"
        }
    ],
    goals: [
        {
            id: 1,
            title: "Blaugurt erreichen",
            targetDate: "2024-06-30",
            progress: 75,
            category: "Gürtelprüfung",
            status: "in_progress"
        },
        {
            id: 2,
            title: "Erste Platzierung bei Turnier",
            targetDate: "2024-08-15",
            progress: 40,
            category: "Wettkampf",
            status: "in_progress"
        }
    ]
};

// API-Service (Dummy-Implementierung)
const apiService = {
    // Backend-Entwickler: Hier echte API-Calls einfügen
    async login(credentials) {
        console.log('API Call: Login', credentials);
        const { username, password } = credentials;
        return new Promise((resolve) => {
            setTimeout(() => {
                let matchedUser = null;
                if (username === 'admin' && password === 'admin123') {
                    matchedUser = demoData.users.find(u => u.username === 'admin');
                } else if (username === 'trainer' && password === 'trainer123') {
                    matchedUser = demoData.users.find(u => u.username === 'trainer');
                } else if (username === 'schueler' && password === 'schueler123') {
                    matchedUser = demoData.users.find(u => u.username === 'schueler');
                }

                if (matchedUser) {
                    resolve({ success: true, user: matchedUser, token: 'dummy-token-123' });
                } else {
                    resolve({ success: false, error: 'Ungültige Anmeldedaten' });
                }
            }, 400);
        });
    },

    async register(userData) {
        console.log('API Call: Register', userData);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: 'Registrierung erfolgreich'
                });
            }, 500);
        });
    },

    async uploadCertificate(certificateData) {
        console.log('API Call: Upload Certificate', certificateData);
        return new Promise((resolve) => {
            setTimeout(() => {
                const newCert = {
                    id: Date.now(),
                    ...certificateData,
                    status: 'pending'
                };
                demoData.certificates.unshift(newCert);
                resolve({
                    success: true,
                    certificate: newCert
                });
            }, 1000);
        });
    },

    async getCertificates() {
        console.log('API Call: Get Certificates');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(demoData.certificates);
            }, 300);
        });
    },

    async addExam(examData) {
        console.log('API Call: Add Exam', examData);
        return new Promise((resolve) => {
            setTimeout(() => {
                const newExam = {
                    id: Date.now(),
                    ...examData,
                    status: 'passed'
                };
                demoData.exams.unshift(newExam);
                resolve({
                    success: true,
                    exam: newExam
                });
            }, 500);
        });
    },

    async getExams() {
        console.log('API Call: Get Exams');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(demoData.exams);
            }, 300);
        });
    },

    async getTrainingHistory() {
        console.log('API Call: Get Training History');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(demoData.trainingHistory);
            }, 300);
        });
    },

    async getSpecialCourses() {
        console.log('API Call: Get Special Courses');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(demoData.specialCourses);
            }, 300);
        });
    },

    async getGoals() {
        console.log('API Call: Get Goals');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(demoData.goals);
            }, 300);
        });
    },

    async addGoal(goalData) {
        console.log('API Call: Add Goal', goalData);
        return new Promise((resolve) => {
            setTimeout(() => {
                const newGoal = {
                    id: Date.now(),
                    ...goalData,
                    status: 'in_progress'
                };
                demoData.goals.unshift(newGoal);
                resolve({
                    success: true,
                    goal: newGoal
                });
            }, 500);
        });
    },

    async getUsers() {
        console.log('API Call: Get Users');
        return new Promise((resolve) => {
            setTimeout(() => {
                // Tiefkopie, damit UI-Änderungen nicht direkt auf demoData zeigen
                resolve(demoData.users.map(u => ({ ...u, permissions: [...u.permissions] })));
            }, 300);
        });
    },

    async updateUser(updatedUser) {
        console.log('API Call: Update User', updatedUser);
        return new Promise((resolve) => {
            setTimeout(() => {
                const idx = demoData.users.findIndex(u => u.id === updatedUser.id);
                if (idx !== -1) {
                    demoData.users[idx] = { ...demoData.users[idx], ...updatedUser, permissions: [...updatedUser.permissions] };
                    resolve({ success: true, user: demoData.users[idx] });
                } else {
                    resolve({ success: false, error: 'User not found' });
                }
            }, 300);
        });
    },

    async verifyAsTrainer(userId) {
        console.log('API Call: Verify as Trainer', userId);
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = demoData.users.find(u => u.id === userId);
                if (!user) return resolve({ success: false, error: 'User not found' });
                user.role = 'trainer';
                user.verifiedTrainer = true;
                if (!user.permissions.includes('manage_exams')) user.permissions.push('manage_exams');
                resolve({ success: true, user: { ...user } });
            }, 300);
        });
    }
};

// Hauptanwendung
const app = createApp({
    template: `
        <div id="fightlog-app">

            
            <!-- Header Navigation -->
            <header v-if="isLoggedIn" class="header">
                <div class="container">
                    <nav class="nav">
                        <a href="#" @click.prevent="goToDashboard" class="logo">
                            FightLog
                        </a>
                        
                                                 <div class="user-info">
                             <span>Angemeldet als {{ currentUser.role === 'admin' ? 'Admin' : currentUser.role === 'trainer' ? 'Trainer' : 'Schüler' }}</span>
                             <button @click="logout" class="btn btn-secondary" style="width: auto; padding: 0.5rem 1rem;">
                                 {{ t('logout') }}
                             </button>
                         </div>
                    </nav>
                </div>
            </header>
            
            <!-- Hauptinhalt -->
            <main>
                <!-- Login/Registrierung -->
                <div v-if="!isLoggedIn">
                    <div class="auth-container">
                        <div class="auth-card">
                            <h2>{{ showRegister ? t('register') : t('login') }}</h2>
                            
                            <form @submit.prevent="showRegister ? handleRegister() : handleLogin()">
                                <div class="form-group">
                                    <label for="username">{{ t('username') }}</label>
                                    <input 
                                        type="text" 
                                        id="username" 
                                        v-model="authForm.username" 
                                        class="form-control" 
                                        required
                                    >
                                </div>
                                
                                <div v-if="showRegister" class="form-group">
                                    <label for="email">{{ t('email') }}</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        v-model="authForm.email" 
                                        class="form-control" 
                                        required
                                    >
                                </div>
                                
                                <div class="form-group">
                                    <label for="password">{{ t('password') }}</label>
                                    <div class="password-field">
                                        <input 
                                            :type="showPassword ? 'text' : 'password'" 
                                            id="password" 
                                            v-model="authForm.password" 
                                            class="form-control" 
                                            required
                                        >
                                        <button 
                                            type="button" 
                                            @click="togglePassword" 
                                            class="password-toggle"
                                        >
                                            <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                <div v-if="showRegister" class="form-group">
                                    <label for="role">{{ t('role') }}</label>
                                    <select id="role" v-model="authForm.role" class="form-control" required>
                                        <option value="">{{ t('role') }}</option>
                                        <option value="schueler">{{ t('student') }}</option>
                                        <option value="trainer">{{ t('trainer') }}</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label>
                                        <input 
                                            type="checkbox" 
                                            v-model="authForm.stayLoggedIn"
                                        >
                                        {{ t('stayLoggedIn') }}
                                    </label>
                                </div>
                                
                                <button type="submit" class="btn btn-primary">
                                    {{ showRegister ? t('register') : t('login') }}
                                </button>
                            </form>
                            
                            <p style="text-align: center; margin-top: 1rem;">
                                <a href="#" @click.prevent="showRegister = !showRegister">
                                    {{ showRegister ? t('login') : t('register') }}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Dashboard -->
                <div v-else-if="currentPage === 'dashboard'">
                    <div class="dashboard">
                        <div class="container">
                            <div class="dashboard-header">
                                <h1>{{ t('welcome') }}</h1>
                                <p>{{ t('subtitle') }}</p>
                            </div>
                            
                            <div class="nav-grid">
                                <div class="nav-card" @click="navigateTo('certificates')">
                                    <i class="fas fa-certificate"></i>
                                    <h3>{{ t('certificates') }}</h3>
                                    <p>Urkunden anzeigen und hochladen</p>
                                </div>
                                
                                <div class="nav-card" @click="navigateTo('specialCourses')">
                                    <i class="fas fa-graduation-cap"></i>
                                    <h3>{{ t('specialCourses') }}</h3>
                                    <p>Sonderkurse ansehen und buchen</p>
                                </div>
                                
                                <div class="nav-card" @click="navigateTo('trainingHistory')">
                                    <i class="fas fa-history"></i>
                                    <h3>{{ t('trainingHistory') }}</h3>
                                    <p>Trainingsverlauf einsehen</p>
                                </div>
                                
                                <div class="nav-card" @click="navigateTo('exams')">
                                    <i class="fas fa-clipboard-check"></i>
                                    <h3>{{ t('exams') }}</h3>
                                    <p>Prüfungsergebnisse & Bewertungen</p>
                                </div>
                                
                                <div class="nav-card" @click="navigateTo('goals')">
                                    <i class="fas fa-bullseye"></i>
                                    <h3>{{ t('goals') }}</h3>
                                    <p>Protokoll und Ziele verwalten</p>
                                </div>

                <div v-if="currentUser && currentUser.role === 'admin'" class="nav-card" @click="navigateTo('admin')">
                    <i class="fas fa-user-shield"></i>
                    <h3>{{ t('adminPanel') }}</h3>
                    <p>Benutzer, Rollen & Rechte verwalten</p>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                                 <!-- Urkunden -->
                 <div v-else-if="currentPage === 'certificates'">
                     <div style="padding: 2rem 0;">
                         <div class="container">
                             <div class="page-header">
                                 <button @click="goToDashboard" class="back-btn">
                                     <i class="fas fa-arrow-left"></i>
                                     Zurück
                                 </button>
                                 <h1>{{ t('certificates') }}</h1>
                             </div>
                            
                            <!-- Upload Formular -->
                            <div class="form-container">
                                <h2>{{ t('uploadCertificate') }}</h2>
                                
                                <form @submit.prevent="uploadCertificate">
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label>{{ t('certificateTitle') }}</label>
                                            <input type="text" v-model="certificateForm.title" class="form-control" required>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>{{ t('certificateType') }}</label>
                                            <select v-model="certificateForm.type" class="form-control" required>
                                                <option value="">{{ t('certificateType') }}</option>
                                                <option value="belt_exam">Gürtelprüfung</option>
                                                <option value="tournament">Turnier</option>
                                                <option value="workshop">Workshop</option>
                                                <option value="special_course">Sonderkurs</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label>{{ t('certificateDate') }}</label>
                                            <input type="date" v-model="certificateForm.date" class="form-control" required>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>{{ t('certificateLevel') }}</label>
                                            <select v-model="certificateForm.level" class="form-control" required>
                                                <option value="">{{ t('certificateLevel') }}</option>
                                                <option value="Weißgurt">Weißgurt</option>
                                                <option value="Gelbgurt">Gelbgurt</option>
                                                <option value="Orangegurt">Orangegurt</option>
                                                <option value="Grüngurt">Grüngurt</option>
                                                <option value="Blaugurt">Blaugurt</option>
                                                <option value="Braungurt">Braungurt</option>
                                                <option value="Schwarzgurt">Schwarzgurt</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>{{ t('certificateInstructor') }}</label>
                                        <input type="text" v-model="certificateForm.instructor" class="form-control" required>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>{{ t('uploadFile') }}</label>
                                        <div 
                                            class="upload-area" 
                                            @click="triggerFileInput"
                                            @dragover.prevent="handleDragOver"
                                            @dragleave.prevent="handleDragLeave"
                                            @drop.prevent="handleDrop"
                                            :class="{ dragover: isDragOver }"
                                        >
                                            <div class="upload-icon">
                                                <i class="fas fa-cloud-upload-alt"></i>
                                            </div>
                                            <p>{{ t('dragDropText') }}</p>
                                            <p style="font-size: 0.9rem; color: #6b7280;">
                                                {{ t('supportedFormats') }}
                                            </p>
                                        </div>
                                        <input 
                                            type="file" 
                                            ref="fileInput" 
                                            @change="handleFileSelect" 
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            style="display: none;"
                                        >
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary">
                                        {{ t('uploadCertificate') }}
                                    </button>
                                </form>
                            </div>
                            
                            <!-- Urkunden Grid -->
                            <div class="certificates-grid">
                                <div 
                                    v-for="cert in certificates" 
                                    :key="cert.id" 
                                    class="certificate-card"
                                >
                                    <div class="certificate-preview">
                                        {{ cert.preview }}
                                    </div>
                                    <h4>{{ cert.title }}</h4>
                                    <p>{{ cert.level }}</p>
                                    <p>{{ cert.date }}</p>
                                    <p>{{ cert.instructor }}</p>
                                    <div style="margin-top: 0.5rem;">
                                        <span :class="'status-' + cert.status">{{ cert.status }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                                 <!-- Sonderkurse -->
                 <div v-else-if="currentPage === 'specialCourses'">
                     <div style="padding: 2rem 0;">
                         <div class="container">
                             <div class="page-header">
                                 <button @click="goToDashboard" class="back-btn">
                                     <i class="fas fa-arrow-left"></i>
                                     Zurück
                                 </button>
                                 <h1>{{ t('specialCourses') }}</h1>
                             </div>
                            
                            <div class="nav-grid">
                                <div 
                                    v-for="course in specialCourses" 
                                    :key="course.id" 
                                    class="nav-card"
                                    style="text-align: left;"
                                >
                                    <h3>{{ course.title }}</h3>
                                    <p><strong>Trainer:</strong> {{ course.instructor }}</p>
                                    <p><strong>Datum:</strong> {{ course.date }}</p>
                                    <p><strong>Dauer:</strong> {{ course.duration }}</p>
                                    <p><strong>Preis:</strong> {{ course.price }}</p>
                                    <p>{{ course.description }}</p>
                                    <p><strong>Teilnehmer:</strong> {{ course.currentParticipants }}/{{ course.maxParticipants }}</p>
                                    
                                    <button 
                                        class="btn btn-primary" 
                                        style="margin-top: 1rem;"
                                        :disabled="course.currentParticipants >= course.maxParticipants"
                                    >
                                        {{ course.currentParticipants >= course.maxParticipants ? 'Ausgebucht' : 'Buchen' }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                                 <!-- Trainingsverlauf -->
                 <div v-else-if="currentPage === 'trainingHistory'">
                     <div style="padding: 2rem 0;">
                         <div class="container">
                             <div class="page-header">
                                 <button @click="goToDashboard" class="back-btn">
                                     <i class="fas fa-arrow-left"></i>
                                     Zurück
                                 </button>
                                 <h1>{{ t('trainingHistory') }}</h1>
                             </div>
                            
                            <div class="timeline">
                                <div 
                                    v-for="session in trainingHistory" 
                                    :key="session.id" 
                                    class="timeline-item"
                                >
                                    <div class="timeline-content">
                                        <h4>{{ session.type }}</h4>
                                        <p><strong>Datum:</strong> {{ session.date }}</p>
                                        <p><strong>Dauer:</strong> {{ session.duration }} Minuten</p>
                                        <p><strong>Trainer:</strong> {{ session.instructor }}</p>
                                        <p><strong>Fokus:</strong> {{ session.focus }}</p>
                                        <p v-if="session.notes"><strong>Notizen:</strong> {{ session.notes }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                                 <!-- Prüfungen -->
                 <div v-else-if="currentPage === 'exams'">
                     <div style="padding: 2rem 0;">
                         <div class="container">
                             <div class="page-header">
                                 <button @click="goToDashboard" class="back-btn">
                                     <i class="fas fa-arrow-left"></i>
                                     Zurück
                                 </button>
                                 <h1>{{ t('exams') }}</h1>
                             </div>
                            
                            <!-- Prüfungseintrag Formular -->
                            <div class="form-container">
                                <h2>{{ t('examEntry') }}</h2>
                                
                                <form @submit.prevent="addExam">
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label>{{ t('examDate') }}</label>
                                            <input type="date" v-model="examForm.date" class="form-control" required>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>{{ t('examLevel') }}</label>
                                            <select v-model="examForm.level" class="form-control" required>
                                                <option value="">{{ t('examLevel') }}</option>
                                                <option value="Weißgurt">Weißgurt</option>
                                                <option value="Gelbgurt">Gelbgurt</option>
                                                <option value="Orangegurt">Orangegurt</option>
                                                <option value="Grüngurt">Grüngurt</option>
                                                <option value="Blaugurt">Blaugurt</option>
                                                <option value="Braungurt">Braungurt</option>
                                                <option value="Schwarzgurt">Schwarzgurt</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label>{{ t('examCategory') }}</label>
                                            <select v-model="examForm.category" class="form-control" required>
                                                <option value="">{{ t('examCategory') }}</option>
                                                <option value="Technik">Technik</option>
                                                <option value="Kampf">Kampf</option>
                                                <option value="Theorie">Theorie</option>
                                                <option value="Kata">Kata</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>{{ t('examScore') }}</label>
                                            <input type="number" v-model="examForm.score" class="form-control" min="0" max="100" required>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>{{ t('examInstructor') }}</label>
                                        <input type="text" v-model="examForm.instructor" class="form-control" required>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>{{ t('examComments') }}</label>
                                        <textarea v-model="examForm.comments" class="form-control" rows="4"></textarea>
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary">
                                        {{ t('submit') }}
                                    </button>
                                </form>
                            </div>
                            
                            <!-- Prüfungsverlauf -->
                            <div class="timeline">
                                <div v-for="exam in exams" :key="exam.id" class="timeline-item">
                                    <div class="timeline-content">
                                        <h4>{{ exam.level }} - {{ exam.category }}</h4>
                                        <p><strong>Datum:</strong> {{ exam.date }}</p>
                                        <p><strong>Bewertung:</strong> {{ exam.score }}/100</p>
                                        <p><strong>Prüfer:</strong> {{ exam.instructor }}</p>
                                        <p><strong>Status:</strong> 
                                            <span :class="'status-' + exam.status">{{ exam.status }}</span>
                                        </p>
                                        <p v-if="exam.comments"><strong>Kommentare:</strong> {{ exam.comments }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                                 <!-- Ziele -->
                 <div v-else-if="currentPage === 'goals'">
                     <div style="padding: 2rem 0;">
                         <div class="container">
                             <div class="page-header">
                                 <button @click="goToDashboard" class="back-btn">
                                     <i class="fas fa-arrow-left"></i>
                                     Zurück
                                 </button>
                                 <h1>{{ t('goals') }}</h1>
                             </div>
                            
                            <!-- Neues Ziel hinzufügen -->
                            <div class="form-container">
                                <h2>Neues Ziel hinzufügen</h2>
                                <form @submit.prevent="addGoal">
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label>Titel</label>
                                            <input type="text" v-model="goalForm.title" class="form-control" required>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Zieldatum</label>
                                            <input type="date" v-model="goalForm.targetDate" class="form-control" required>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label>Kategorie</label>
                                            <select v-model="goalForm.category" class="form-control" required>
                                                <option value="">Kategorie wählen</option>
                                                <option value="Gürtelprüfung">Gürtelprüfung</option>
                                                <option value="Wettkampf">Wettkampf</option>
                                                <option value="Karriere">Karriere</option>
                                                <option value="Training">Training</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fortschritt (%)</label>
                                            <input type="number" v-model="goalForm.progress" class="form-control" min="0" max="100" required>
                                        </div>
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary">
                                        Ziel hinzufügen
                                    </button>
                                </form>
                            </div>
                            
                            <!-- Ziele Liste -->
                            <div class="nav-grid">
                                <div 
                                    v-for="goal in goals" 
                                    :key="goal.id" 
                                    class="nav-card"
                                    style="text-align: left;"
                                >
                                    <h3>{{ goal.title }}</h3>
                                    <p><strong>Kategorie:</strong> {{ goal.category }}</p>
                                    <p><strong>Zieldatum:</strong> {{ goal.targetDate }}</p>
                                    <p><strong>Status:</strong> {{ goal.status }}</p>
                                    
                                    <div style="margin-top: 1rem;">
                                        <div style="background: #e5e7eb; height: 8px; border-radius: 4px; overflow: hidden;">
                                            <div 
                                                :style="{ 
                                                    background: goal.progress >= 100 ? '#10b981' : '#3b82f6', 
                                                    width: Math.min(goal.progress, 100) + '%', 
                                                    height: '100%' 
                                                }"
                                            ></div>
                                        </div>
                                        <p style="margin-top: 0.5rem; font-size: 0.9rem;">
                                            {{ goal.progress }}% abgeschlossen
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Admin-Bereich -->
                <div v-else-if="currentPage === 'admin'">
                    <div style="padding: 2rem 0;">
                        <div class="container">
                            <div class="page-header">
                                <button @click="goToDashboard" class="back-btn">
                                    <i class="fas fa-arrow-left"></i>
                                    Zurück
                                </button>
                                <h1>{{ t('adminPanel') }}</h1>
                            </div>

                            <div class="form-container">
                                <h2>{{ t('users') }}</h2>
                                <div class="form-group">
                                    <label>{{ t('search') }}</label>
                                    <input type="text" v-model="adminSearch" class="form-control" placeholder="Benutzer suchen (Name, Benutzername, E-Mail)">
                                </div>

                                <div class="certificates-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
                                    <div v-for="user in adminFilteredUsers" :key="user.id" class="nav-card" style="text-align: left;">
                                        <h3 style="display:flex; align-items:center; gap:.5rem;">
                                            <i class="fas" :class="user.role === 'admin' ? 'fa-user-shield' : (user.role === 'trainer' ? 'fa-chalkboard-teacher' : 'fa-user')"></i>
                                            {{ user.name }}
                                        </h3>
                                        <p><strong>Benutzername:</strong> {{ user.username }}</p>
                                        <p><strong>E-Mail:</strong> {{ user.email }}</p>
                                        <p>
                                            <strong>Rolle:</strong>
                                            <select v-model="user.role" class="form-control" style="margin-top:.25rem;">
                                                <option value="schueler">Schüler</option>
                                                <option value="trainer">Trainer</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                        </p>
                                        <p>
                                            <strong>Verifiziert (Trainer):</strong>
                                            <span :class="user.verifiedTrainer ? 'status-approved' : 'status-pending'">{{ user.verifiedTrainer ? 'Ja' : 'Nein' }}</span>
                                            <button v-if="!user.verifiedTrainer" class="btn btn-secondary" style="width:auto; margin-left:.5rem;" @click="verifyUserAsTrainer(user)">{{ t('verifyTrainer') }}</button>
                                        </p>

                                        <div style="margin-top: .5rem;">
                                            <strong>{{ t('permissions') }}:</strong>
                                            <div style="display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:.25rem; margin-top:.5rem;">
                                                <label v-for="perm in adminPermissionsList" :key="perm.key" style="display:flex; gap:.5rem; align-items:center; font-size:.9rem;">
                                                    <input type="checkbox" :checked="user.permissions.includes(perm.key)" @change="togglePermission(user, perm.key)">
                                                    {{ perm.label }}
                                                </label>
                                            </div>
                                        </div>

                                        <div style="margin-top: 1rem; display:flex; gap:.5rem;">
                                            <button class="btn btn-primary" style="width:auto;" @click="saveUser(user)">{{ t('saveChanges') }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `,
    
    data() {
        return {
            // Authentifizierung
            isLoggedIn: false,
            currentUser: null,
            showRegister: false,
            showPassword: false,
            
            // Navigation
            currentPage: 'dashboard',
            
                         // Sprache (nur Deutsch)
             currentLanguage: 'de',
            
            // Formulardaten
            authForm: {
                username: '',
                email: '',
                password: '',
                role: '',
                stayLoggedIn: false
            },
            
            certificateForm: {
                title: '',
                type: '',
                date: '',
                level: '',
                instructor: '',
                file: null
            },
            
            examForm: {
                date: '',
                level: '',
                category: '',
                score: '',
                instructor: '',
                comments: ''
            },
            
            goalForm: {
                title: '',
                targetDate: '',
                category: '',
                progress: 0
            },
            
            // Upload
            isDragOver: false,
            
            // Daten
            certificates: [],
            exams: [],
            trainingHistory: [],
            specialCourses: [],
            goals: []
            ,
            // Admin
            adminUserList: [],
            adminSearch: '',
            adminPermissionsList: [
                { key: 'manage_users', label: 'Benutzer verwalten' },
                { key: 'view_all_data', label: 'Alle Daten einsehen' },
                { key: 'manage_certificates', label: 'Urkunden verwalten' },
                { key: 'approve_certificates', label: 'Urkunden freigeben' },
                { key: 'manage_exams', label: 'Prüfungen verwalten' },
                { key: 'edit_training_history', label: 'Trainingsverlauf bearbeiten' }
            ]
        }
    },
    
    computed: {
        // Übersetzungen
        t() {
            return (key) => {
                return translations[this.currentLanguage][key] || key;
            }
        },
        adminFilteredUsers() {
            const q = (this.adminSearch || '').toLowerCase().trim();
            if (!q) return this.adminUserList;
            return this.adminUserList.filter(u =>
                (u.username || '').toLowerCase().includes(q) ||
                (u.email || '').toLowerCase().includes(q) ||
                (u.name || '').toLowerCase().includes(q)
            );
        }
    },
    
    methods: {
        // Navigation
        navigateTo(page) {
            this.currentPage = page;
            this.loadPageData();
        },
        
        goToDashboard() {
            this.currentPage = 'dashboard';
        },
        
        // Authentifizierung
        async handleLogin() {
            try {
                const response = await apiService.login(this.authForm);
                if (response.success) {
                    this.isLoggedIn = true;
                    this.currentUser = response.user;
                    
                    if (this.authForm.stayLoggedIn) {
                        localStorage.setItem('fightlog_username', this.authForm.username);
                    }
                    
                    this.authForm = {
                        username: '',
                        email: '',
                        password: '',
                        role: '',
                        stayLoggedIn: false
                    };
                } else {
                    alert(response.error || 'Login fehlgeschlagen');
                }
            } catch (error) {
                console.error('Login error:', error);
                alert('Login fehlgeschlagen');
            }
        },
        
        async handleRegister() {
            try {
                const response = await apiService.register(this.authForm);
                if (response.success) {
                    alert('Registrierung erfolgreich! Sie können sich jetzt anmelden.');
                    this.showRegister = false;
                    this.authForm = {
                        username: '',
                        email: '',
                        password: '',
                        role: '',
                        stayLoggedIn: false
                    };
                }
            } catch (error) {
                console.error('Register error:', error);
                alert('Registrierung fehlgeschlagen');
            }
        },
        
        logout() {
            this.isLoggedIn = false;
            this.currentUser = null;
            this.currentPage = 'dashboard';
            localStorage.removeItem('fightlog_username');
        },
        
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        
                 // Sprache (nur Deutsch)
         setLanguage(lang) {
             this.currentLanguage = 'de'; // Immer Deutsch
             localStorage.setItem('fightlog_language', 'de');
         },
        
        // Upload
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        
        handleFileSelect(event) {
            this.certificateForm.file = event.target.files[0];
        },
        
        handleDragOver() {
            this.isDragOver = true;
        },
        
        handleDragLeave() {
            this.isDragOver = false;
        },
        
        handleDrop(event) {
            this.isDragOver = false;
            this.certificateForm.file = event.dataTransfer.files[0];
        },
        
        // Urkunden
        async uploadCertificate() {
            try {
                const response = await apiService.uploadCertificate(this.certificateForm);
                if (response.success) {
                    alert('Urkunde erfolgreich hochgeladen!');
                    this.certificateForm = {
                        title: '',
                        type: '',
                        date: '',
                        level: '',
                        instructor: '',
                        file: null
                    };
                    this.loadCertificates();
                }
            } catch (error) {
                console.error('Upload error:', error);
                alert('Upload fehlgeschlagen');
            }
        },
        
        async loadCertificates() {
            try {
                this.certificates = await apiService.getCertificates();
            } catch (error) {
                console.error('Load certificates error:', error);
            }
        },
        
        // Prüfungen
        async addExam() {
            try {
                const response = await apiService.addExam(this.examForm);
                if (response.success) {
                    alert('Prüfung erfolgreich eingetragen!');
                    this.examForm = {
                        date: '',
                        level: '',
                        category: '',
                        score: '',
                        instructor: '',
                        comments: ''
                    };
                    this.loadExams();
                }
            } catch (error) {
                console.error('Add exam error:', error);
                alert('Prüfungseintrag fehlgeschlagen');
            }
        },
        
        async loadExams() {
            try {
                this.exams = await apiService.getExams();
            } catch (error) {
                console.error('Load exams error:', error);
            }
        },
        
        // Ziele
        async addGoal() {
            try {
                const response = await apiService.addGoal(this.goalForm);
                if (response.success) {
                    alert('Ziel erfolgreich hinzugefügt!');
                    this.goalForm = {
                        title: '',
                        targetDate: '',
                        category: '',
                        progress: 0
                    };
                    this.loadGoals();
                }
            } catch (error) {
                console.error('Add goal error:', error);
                alert('Ziel hinzufügen fehlgeschlagen');
            }
        },
        
        async loadGoals() {
            try {
                this.goals = await apiService.getGoals();
            } catch (error) {
                console.error('Load goals error:', error);
            }
        },
        
        // Admin
        async loadUsers() {
            try {
                const users = await apiService.getUsers();
                this.adminUserList = users;
            } catch (error) {
                console.error('Load users error:', error);
            }
        },
        togglePermission(user, permKey) {
            const has = user.permissions.includes(permKey);
            if (has) {
                user.permissions = user.permissions.filter(p => p !== permKey);
            } else {
                user.permissions = [...user.permissions, permKey];
            }
        },
        async verifyUserAsTrainer(user) {
            try {
                const res = await apiService.verifyAsTrainer(user.id);
                if (res.success) {
                    const idx = this.adminUserList.findIndex(u => u.id === user.id);
                    if (idx !== -1) this.adminUserList[idx] = res.user;
                    alert('Benutzer wurde als Trainer verifiziert.');
                } else {
                    alert('Verifizierung fehlgeschlagen');
                }
            } catch (e) {
                console.error('Verify trainer error:', e);
                alert('Verifizierung fehlgeschlagen');
            }
        },
        async saveUser(user) {
            try {
                const res = await apiService.updateUser(user);
                if (res.success) {
                    alert('Benutzer gespeichert.');
                } else {
                    alert('Speichern fehlgeschlagen');
                }
            } catch (e) {
                console.error('Save user error:', e);
                alert('Speichern fehlgeschlagen');
            }
        },
        
        // Daten laden
        async loadPageData() {
            switch (this.currentPage) {
                case 'certificates':
                    await this.loadCertificates();
                    break;
                case 'exams':
                    await this.loadExams();
                    break;
                case 'goals':
                    await this.loadGoals();
                    break;
                case 'trainingHistory':
                    try {
                        this.trainingHistory = await apiService.getTrainingHistory();
                    } catch (error) {
                        console.error('Load training history error:', error);
                    }
                    break;
                case 'specialCourses':
                    try {
                        this.specialCourses = await apiService.getSpecialCourses();
                    } catch (error) {
                        console.error('Load special courses error:', error);
                    }
                    break;
                case 'admin':
                    await this.loadUsers();
                    break;
            }
        }
    },
    
         mounted() {
         // Lade gespeicherte Einstellungen (nur Deutsch)
         this.currentLanguage = 'de';
         localStorage.setItem('fightlog_language', 'de');
        
        const savedUsername = localStorage.getItem('fightlog_username');
        if (savedUsername) {
            // Demo: Auto-Login wenn Benutzername gespeichert
            this.isLoggedIn = true;
            this.currentUser = demoData.user;
        }
    }
});

// Starte Anwendung
app.mount('#app'); 