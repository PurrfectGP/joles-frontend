<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover">
    <title>Join Our Testing Pool - Harmonia</title>
    <meta name="description" content="Harmonia combines visual attraction, psychological compatibility, and genetic chemistry for real human connection.">
    <meta name="theme-color" content="#FAF6F1">
    <link rel="icon" type="image/png" href="assets/logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    
</head>
<body>
    <nav>
        <div class="logo">
            <a href="index.html"><img src="assets/logo.png" alt="Harmonia Logo" style="height:42px;"></a>
            <span class="sr-only">Harmonia</span>
        </div>
        <div class="nav-right">
            <ul class="nav-links">
                <li><a href="index.html" id="nav-home">Home</a></li>
                <li><a href="why-harmonia.html" id="nav-why-harmonia">Why Harmonia</a></li>
                <li><a href="partnerships.html" id="nav-partnerships">Ignite Your Platform</a></li>
                <li><a href="team.html" id="nav-team">Team</a></li>
                <li><a href="local-network.html" id="nav-local-network">Local Network</a></li>
                <li><a href="p2p.html" id="nav-p2p" class="active">Join Our Testing Pool</a></li>
                <li><a href="contact.html" id="nav-contact">Contact</a></li>
            </ul>
            <button class="hamburger" onclick="toggleMobileNav()" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
            <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">
                <div class="theme-toggle-icons">
                    <svg class="sun-icon" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>
                    <svg class="moon-icon" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
                </div>
            </button>
        </div>
    </nav>

    <main class="page active" id="page-p2p">

        <section class="p2p-section" style="margin-top:80px;">
            <div class="coming-soon-container">
                <span class="coming-soon-badge">Testing Pool Open</span>
                <h2 class="p2p-title">Join the London Beta</h2>
                <p class="rebellion-tagline">"Chemistry, not selection."</p>
                
                <p class="p2p-subtitle">
                    Be among the first to experience compatibility matching that goes beyond swiping. 
                    Complete the sign-up phases below to join our February 2026 beta launch.
                </p>

                <div class="waitlist-form">
                    <form id="waitlistForm">
                        <input type="email" name="email" placeholder="Enter your email" required>
                        <button type="submit" class="btn btn-primary">Join Waitlist</button>
                    </form>
                    <div id="waitlistMessage" class="form-message"></div>
                </div>

                <div class="free-dna-banner">
                    <h3>Free DNA Kit for Beta Testers</h3>
                    <p>First 100 participants receive a complimentary genetic analysis kit, a &pound;35 value.</p>
                </div>
            </div>
        </section>

        <!-- HARMONIA PREVIEW APP -->
        <section id="harmonia-preview-section" style="padding:2rem 0 4rem; margin-top:2rem;">
            <div style="max-width:1200px; margin:0 auto; padding:0 2rem;">
                <div style="text-align:center; margin-bottom:3rem;">
                    <h2 style="font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,3vw,2.5rem); color:var(--navy); margin-bottom:1rem;">
                        Preview: <span style="color:var(--gold);">Your Compatibility Journey</span>
                    </h2>
                    <p style="color:var(--slate); max-width:600px; margin:0 auto;">
                        Experience how Harmonia builds your comprehensive compatibility profile through three scientific phases.
                    </p>
                </div>

                <!-- Phase Progress Bar -->
                <div id="preview-progress" style="display:flex; justify-content:center; gap:2rem; margin-bottom:3rem; flex-wrap:wrap;">
                    <div class="preview-step active" data-step="signup" style="text-align:center; cursor:pointer;" onclick="showPreviewStep('signup')">
                        <div style="width:48px; height:48px; border-radius:50%; background:var(--gold); color:var(--maroon-deep); display:flex; align-items:center; justify-content:center; font-weight:700; margin:0 auto 0.5rem; font-size:1.1rem; transition:all 0.3s;">0</div>
                        <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--slate);">Sign Up</span>
                    </div>
                    <div class="preview-step" data-step="phase1" style="text-align:center; cursor:pointer; opacity:0.5;" onclick="showPreviewStep('phase1')">
                        <div style="width:48px; height:48px; border-radius:50%; border:2px solid var(--gold); color:var(--gold); display:flex; align-items:center; justify-content:center; font-weight:700; margin:0 auto 0.5rem; font-size:1.1rem; transition:all 0.3s;">1</div>
                        <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--slate);">Visual</span>
                    </div>
                    <div class="preview-step" data-step="phase2" style="text-align:center; cursor:pointer; opacity:0.5;" onclick="showPreviewStep('phase2')">
                        <div style="width:48px; height:48px; border-radius:50%; border:2px solid var(--gold); color:var(--gold); display:flex; align-items:center; justify-content:center; font-weight:700; margin:0 auto 0.5rem; font-size:1.1rem; transition:all 0.3s;">2</div>
                        <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--slate);">Psychometric</span>
                    </div>
                    <div class="preview-step" data-step="phase3" style="text-align:center; cursor:pointer; opacity:0.5;" onclick="showPreviewStep('phase3')">
                        <div style="width:48px; height:48px; border-radius:50%; border:2px solid var(--gold); color:var(--gold); display:flex; align-items:center; justify-content:center; font-weight:700; margin:0 auto 0.5rem; font-size:1.1rem; transition:all 0.3s;">3</div>
                        <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--slate);">Biological</span>
                    </div>
                </div>

                <!-- STEP 0: Sign Up -->
                <div id="step-signup" class="preview-panel" style="background:var(--card-bg); border:1px solid rgba(212,168,83,0.2); border-radius:16px; padding:2.5rem; max-width:700px; margin:0 auto;">
                    <h3 style="font-family:'Cormorant Garamond',serif; font-size:1.6rem; margin-bottom:0.5rem; color:var(--navy);">Create Your Profile</h3>
                    <p style="color:var(--slate); margin-bottom:2rem; font-size:0.95rem;">Start your compatibility journey. All data is encrypted and never shared without consent.</p>
                    
                    <div style="display:grid; gap:1.2rem;">
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                            <div>
                                <label style="display:block; font-size:0.8rem; color:var(--slate); margin-bottom:0.4rem; text-transform:uppercase; letter-spacing:0.05em;">First Name</label>
                                <input type="text" placeholder="Jane" style="width:100%; padding:0.8rem 1rem; border:1px solid rgba(114,47,55,0.2); border-radius:8px; background:var(--cream); color:var(--navy); font-family:inherit; font-size:0.95rem;">
                            </div>
                            <div>
                                <label style="display:block; font-size:0.8rem; color:var(--slate); margin-bottom:0.4rem; text-transform:uppercase; letter-spacing:0.05em;">Age</label>
                                <input type="number" placeholder="25" min="18" max="99" style="width:100%; padding:0.8rem 1rem; border:1px solid rgba(114,47,55,0.2); border-radius:8px; background:var(--cream); color:var(--navy); font-family:inherit; font-size:0.95rem;">
                            </div>
                        </div>
                        <div>
                            <label style="display:block; font-size:0.8rem; color:var(--slate); margin-bottom:0.4rem; text-transform:uppercase; letter-spacing:0.05em;">Email</label>
                            <input type="email" placeholder="jane@example.com" style="width:100%; padding:0.8rem 1rem; border:1px solid rgba(114,47,55,0.2); border-radius:8px; background:var(--cream); color:var(--navy); font-family:inherit; font-size:0.95rem;">
                        </div>
                        <div>
                            <label style="display:block; font-size:0.8rem; color:var(--slate); margin-bottom:0.4rem; text-transform:uppercase; letter-spacing:0.05em;">Location (London area)</label>
                            <select style="width:100%; padding:0.8rem 1rem; border:1px solid rgba(114,47,55,0.2); border-radius:8px; background:var(--cream); color:var(--navy); font-family:inherit; font-size:0.95rem;">
                                <option value="">Select area...</option>
                                <option>Central London</option><option>North London</option>
                                <option>South London</option><option>East London</option>
                                <option>West London</option><option>Greater London</option>
                            </select>
                        </div>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                            <div>
                                <label style="display:block; font-size:0.8rem; color:var(--slate); margin-bottom:0.4rem; text-transform:uppercase; letter-spacing:0.05em;">Gender</label>
                                <select style="width:100%; padding:0.8rem 1rem; border:1px solid rgba(114,47,55,0.2); border-radius:8px; background:var(--cream); color:var(--navy); font-family:inherit; font-size:0.95rem;">
                                    <option value="">Select...</option><option>Male</option><option>Female</option><option>Non-binary</option><option>Prefer not to say</option>
                                </select>
                            </div>
                            <div>
                                <label style="display:block; font-size:0.8rem; color:var(--slate); margin-bottom:0.4rem; text-transform:uppercase; letter-spacing:0.05em;">Interested In</label>
                                <select style="width:100%; padding:0.8rem 1rem; border:1px solid rgba(114,47,55,0.2); border-radius:8px; background:var(--cream); color:var(--navy); font-family:inherit; font-size:0.95rem;">
                                    <option value="">Select...</option><option>Men</option><option>Women</option><option>Everyone</option>
                                </select>
                            </div>
                        </div>
                        <div style="margin-top:0.5rem;">
                            <label style="display:flex; align-items:flex-start; gap:0.5rem; cursor:pointer; font-size:0.85rem; color:var(--slate);">
                                <input type="checkbox" style="margin-top:3px;"> I consent to Harmonia processing my data for compatibility matching. I understand my genetic data will be encrypted and never shared.
                            </label>
                        </div>
                        <button onclick="showPreviewStep('phase1')" class="btn btn-primary" style="width:100%; justify-content:center; margin-top:0.5rem;">
                            Begin Phase 1: Visual Calibration &rarr;
                        </button>
                    </div>
                </div>

                <!-- STEP 1: Visual Phase Preview -->
                <div id="step-phase1" class="preview-panel" style="display:none; background:var(--card-bg); border:1px solid rgba(212,168,83,0.2); border-radius:16px; padding:2.5rem; max-width:700px; margin:0 auto;">
                    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1rem;">
                        <span style="background:linear-gradient(135deg, var(--gold), var(--gold-champagne)); color:var(--maroon-deep); padding:0.3rem 0.8rem; border-radius:20px; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Phase 1</span>
                        <span style="color:var(--slate); font-size:0.85rem;">MetaFBP Visual Calibration</span>
                    </div>
                    <h3 style="font-family:'Cormorant Garamond',serif; font-size:1.6rem; margin-bottom:0.5rem; color:var(--navy);">Visual Preference Learning</h3>
                    <p style="color:var(--slate); margin-bottom:1.5rem;">Our neural network learns your unique aesthetic preferences. Rate 50 faces and we build your personal attraction model using high-order meta-learning.</p>
                    
                    <div style="background:rgba(114,47,55,0.04); border:1px dashed rgba(212,168,83,0.3); border-radius:12px; padding:2rem; text-align:center; margin-bottom:1.5rem;">
                        <div style="font-size:3rem; margin-bottom:0.5rem;">&#128065;</div>
                        <p style="color:var(--slate); font-size:0.9rem;">Photo rating interface launches after sign-up approval</p>
                        <p style="color:var(--gold); font-size:0.8rem; margin-top:0.5rem;">50 faces &bull; Swipe or tap &bull; ~5 minutes</p>
                    </div>
                    
                    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.75rem; margin-bottom:1.5rem;">
                        <div style="background:var(--cream); padding:0.8rem; border-radius:8px; text-align:center;">
                            <div style="font-size:0.65rem; color:var(--slate); text-transform:uppercase; letter-spacing:0.1em;">Traits Detected</div>
                            <div style="color:var(--gold); font-size:1.3rem; font-weight:600; font-family:'Cormorant Garamond',serif;">6 categories</div>
                        </div>
                        <div style="background:var(--cream); padding:0.8rem; border-radius:8px; text-align:center;">
                            <div style="font-size:0.65rem; color:var(--slate); text-transform:uppercase; letter-spacing:0.1em;">Neural Model</div>
                            <div style="color:var(--gold); font-size:1.3rem; font-weight:600; font-family:'Cormorant Garamond',serif;">ResNet-18</div>
                        </div>
                        <div style="background:var(--cream); padding:0.8rem; border-radius:8px; text-align:center;">
                            <div style="font-size:0.65rem; color:var(--slate); text-transform:uppercase; letter-spacing:0.1em;">Dimensions</div>
                            <div style="color:var(--gold); font-size:1.3rem; font-weight:600; font-family:'Cormorant Garamond',serif;">512</div>
                        </div>
                    </div>
                    
                    <button onclick="showPreviewStep('phase2')" class="btn btn-primary" style="width:100%; justify-content:center;">
                        Continue to Phase 2: Psychometric &rarr;
                    </button>
                </div>

                <!-- STEP 2: Psychometric Phase Preview -->
                <div id="step-phase2" class="preview-panel" style="display:none; background:var(--card-bg); border:1px solid rgba(212,168,83,0.2); border-radius:16px; padding:2.5rem; max-width:700px; margin:0 auto;">
                    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1rem;">
                        <span style="background:linear-gradient(135deg, var(--gold), var(--gold-champagne)); color:var(--maroon-deep); padding:0.3rem 0.8rem; border-radius:20px; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Phase 2 &bull; Felix Protocol</span>
                    </div>
                    <h3 style="font-family:'Cormorant Garamond',serif; font-size:1.6rem; margin-bottom:0.5rem; color:var(--navy);">Psychometric Intelligence (PIIP)</h3>
                    <p style="color:var(--slate); margin-bottom:1.5rem;">Answer 6 scenario-based questions. Our AI parses your natural language across 7 personality dimensions to build your compatibility profile.</p>
                    
                    <div style="background:rgba(114,47,55,0.04); border:1px solid rgba(212,168,83,0.15); border-radius:12px; padding:1.5rem; margin-bottom:1.5rem;">
                        <div style="font-size:0.7rem; color:var(--gold); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.8rem;">Sample Question &bull; Q1 of 6</div>
                        <p style="color:var(--navy); font-style:italic; line-height:1.6; font-size:0.95rem;">"The bill arrives at a group dinner. Everyone contributed differently to the meal. What's your approach to splitting it?"</p>
                        <div style="margin-top:1rem;">
                            <textarea placeholder="Share your natural response... (25-150 words)" style="width:100%; min-height:100px; padding:0.8rem 1rem; border:1px solid rgba(114,47,55,0.2); border-radius:8px; background:var(--cream); color:var(--navy); font-family:inherit; font-size:0.9rem; resize:vertical;" disabled></textarea>
                            <p style="font-size:0.75rem; color:var(--slate); margin-top:0.5rem;">Full questionnaire available after beta approval</p>
                        </div>
                    </div>
                    
                    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:0.5rem; margin-bottom:1.5rem;">
                        <div style="text-align:center; padding:0.5rem; background:var(--cream); border-radius:8px;">
                            <div style="font-size:0.6rem; color:var(--slate); text-transform:uppercase;">Wrath</div>
                            <div style="color:var(--maroon); font-weight:600;">1.5&times;</div>
                        </div>
                        <div style="text-align:center; padding:0.5rem; background:var(--cream); border-radius:8px;">
                            <div style="font-size:0.6rem; color:var(--slate); text-transform:uppercase;">Sloth</div>
                            <div style="color:var(--maroon); font-weight:600;">1.3&times;</div>
                        </div>
                        <div style="text-align:center; padding:0.5rem; background:var(--cream); border-radius:8px;">
                            <div style="font-size:0.6rem; color:var(--slate); text-transform:uppercase;">Pride</div>
                            <div style="color:var(--maroon); font-weight:600;">1.2&times;</div>
                        </div>
                        <div style="text-align:center; padding:0.5rem; background:var(--cream); border-radius:8px;">
                            <div style="font-size:0.6rem; color:var(--slate); text-transform:uppercase;">Envy</div>
                            <div style="color:var(--maroon); font-weight:600;">0.7&times;</div>
                        </div>
                    </div>

                    <button onclick="showPreviewStep('phase3')" class="btn btn-primary" style="width:100%; justify-content:center;">
                        Continue to Phase 3: Biological &rarr;
                    </button>
                </div>

                <!-- STEP 3: Biological Phase Preview -->
                <div id="step-phase3" class="preview-panel" style="display:none; background:var(--card-bg); border:1px solid rgba(212,168,83,0.2); border-radius:16px; padding:2.5rem; max-width:700px; margin:0 auto;">
                    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1rem;">
                        <span style="background:linear-gradient(135deg, var(--gold), var(--gold-champagne)); color:var(--maroon-deep); padding:0.3rem 0.8rem; border-radius:20px; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Phase 3 &bull; HLA Analysis</span>
                    </div>
                    <h3 style="font-family:'Cormorant Garamond',serif; font-size:1.6rem; margin-bottom:0.5rem; color:var(--navy);">Biological Compatibility</h3>
                    <p style="color:var(--slate); margin-bottom:1.5rem;">Using HIBAG imputation from your DNA kit, we analyze HLA alleles across 3 loci to predict MHC-mediated physical chemistry.</p>
                    
                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.75rem; margin-bottom:1.5rem;">
                        <div style="background:var(--cream); padding:1rem; border-radius:10px; text-align:center;">
                            <div style="font-family:'Cormorant Garamond',serif; color:var(--gold); font-size:1rem; font-weight:600;">HLA-A</div>
                            <div style="font-size:0.7rem; color:var(--slate);">2 alleles typed</div>
                        </div>
                        <div style="background:var(--cream); padding:1rem; border-radius:10px; text-align:center;">
                            <div style="font-family:'Cormorant Garamond',serif; color:var(--gold); font-size:1rem; font-weight:600;">HLA-B</div>
                            <div style="font-size:0.7rem; color:var(--slate);">2 alleles typed</div>
                        </div>
                        <div style="background:var(--cream); padding:1rem; border-radius:10px; text-align:center;">
                            <div style="font-family:'Cormorant Garamond',serif; color:var(--gold); font-size:1rem; font-weight:600;">HLA-DRB1</div>
                            <div style="font-size:0.7rem; color:var(--slate);">2 alleles typed</div>
                        </div>
                    </div>

                    <div style="background:rgba(212,168,83,0.08); border:1px solid rgba(212,168,83,0.2); border-radius:12px; padding:1.5rem; margin-bottom:1.5rem;">
                        <h4 style="color:var(--gold); font-size:0.85rem; margin-bottom:0.5rem;">&#127981; How It Works</h4>
                        <p style="color:var(--slate); font-size:0.85rem; line-height:1.6;">Your free DNA kit arrives by post. Provide a saliva sample, return it, and we extract your HLA markers using HIBAG imputation. Your genetic data is Fernet-encrypted and never stored in plain text.</p>
                    </div>

                    <div style="background:var(--cream); border-radius:12px; padding:1.5rem; text-align:center;">
                        <p style="color:var(--navy); font-size:1rem; margin-bottom:0.5rem;">&#10003; Profile Complete</p>
                        <p style="color:var(--slate); font-size:0.85rem;">Your WtM score combines all three phases:</p>
                        <p style="font-family:'Cormorant Garamond',serif; font-size:1.4rem; color:var(--gold); margin-top:0.5rem; font-weight:600;">WtM = (0.4 &times; S<sub>vis</sub>) + (0.3 &times; S<sub>psych</sub>) + (0.3 &times; S<sub>bio</sub>)</p>
                    </div>
                </div>
            </div>
        </section>

        <script>
        function showPreviewStep(step) {
            document.querySelectorAll('.preview-panel').forEach(p => p.style.display = 'none');
            document.querySelectorAll('.preview-step').forEach(s => {
                s.style.opacity = '0.5';
                s.classList.remove('active');
            });
            const panel = document.getElementById('step-' + step);
            if (panel) panel.style.display = 'block';
            const stepEl = document.querySelector('[data-step="' + step + '"]');
            if (stepEl) { stepEl.style.opacity = '1'; stepEl.classList.add('active'); }
        }
        </script>

    </main>

    <footer>
        <div class="footer-inner">
            <span class="logo-text">Harmonia Engine</span>
            <div class="footer-links">
                <a href="why-harmonia.html">Why Harmonia</a>
                <a href="partnerships.html">Ignite Your Platform</a>
                <a href="team.html">Team</a>
                <a href="contact.html">Contact</a>
            </div>
            <p class="copyright">&copy; 2026 Harmonia Engine</p>
        </div>
    </footer>

    <script src="js/webgl.js"></script>
    <script src="js/app.js"></script>
    
</body>
</html>