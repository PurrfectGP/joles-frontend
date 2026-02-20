# Harmonia V3 — Design Fields Specification
## Required Data Fields for Each Phase

> Source: Harmonia V3 Master Technical Specification v8.0

---

## Sign-Up Phase (Phase 0)

Fields collected at registration before any compatibility analysis begins.

| Field | Type | Required | Validation | Notes |
|-------|------|----------|------------|-------|
| `first_name` | string | ✅ | 2-50 chars | Display name only |
| `age` | integer | ✅ | 18-99 | Legal requirement |
| `email` | email | ✅ | Valid email format | Primary contact, verification |
| `location` | enum | ✅ | London areas | Beta limited to London |
| `gender` | enum | ✅ | Male/Female/Non-binary/Other | Self-identified |
| `interested_in` | enum | ✅ | Men/Women/Everyone | Matching filter |
| `consent_data` | boolean | ✅ | Must be true | GDPR requirement |
| `consent_genetic` | boolean | ⬜ | Optional at signup | Required before Phase 3 |

---

## Phase 1: Visual Calibration (MetaFBP)

### Input: Support Set (User Swipes)
| Field | Type | Format | Notes |
|-------|------|--------|-------|
| `meta_task_id` | UUID | uuid_v4 | Unique per user's support set |
| `last_updated` | datetime | ISO 8601 | Last swipe timestamp |
| `total_samples` | integer | 50+ minimum | Faces rated by user |
| `score_1` | array[path] | Image paths | Dislikes (1/5) |
| `score_2` | array[path] | Image paths | Mild dislikes (2/5) |
| `score_3` | array[path] | Image paths | Neutral (3/5) |
| `score_4` | array[path] | Image paths | Likes (4/5) |
| `score_5` | array[path] | Image paths | Super likes (5/5) |

### Output: Visual Profile
| Field | Type | Range | Description |
|-------|------|-------|-------------|
| `mandatory_traits` | array[trait] | 0-N | Traits in >80% of liked faces |
| `preferred_traits` | array[trait] | 0-N | Traits in 60-80% of liked faces |
| `aversion_traits` | array[trait] | 0-N | Traits in >60% of disliked faces |
| `trait.name` | string | - | e.g., "glasses", "dark_hair" |
| `trait.weight` | float | 0.0-1.0 | Importance weight |
| `trait.frequency` | float | 0.0-1.0 | Frequency in relevant bucket |

### Trait Categories Detected
| Category | Example Traits |
|----------|---------------|
| Facial Structure | high_cheekbones, strong_jawline, oval_face, defined_chin |
| Eye Features | expressive_eyes, almond_eyes, deep_set_eyes, eye_color_* |
| Hair/Style | curly_hair, short_hair, beard, clean_shaven, glasses |
| Skin/Complexion | clear_skin, freckles, tan_complexion, fair_skin |
| Expression/Vibe | warm_smile, serious, intellectual, approachable, mysterious |
| Presentation | minimalist, bold_fashion, tattoos, piercings, executive_style |

### Scoring Formula
```
S_vis = (MetaFBP_Component × 0.6) + (T_match_positive × 0.25) + (T_match_negative × 0.15)

Where:
  MetaFBP_Component = (raw_score - 1) × 25    → [0, 100]
  T_match_positive  = Σ(matched weights) / Σ(all positive weights) × 100
  T_match_negative  = (1 - penalty_ratio) × 100
```

---

## Phase 2: Psychometric Intelligence (PIIP / Felix Protocol)

### Input: 6 Scenario Questions
| Q# | Question | Domain | Primary Sins |
|----|----------|--------|-------------|
| Q1 | Group dinner bill splitting | Resource sharing, fairness | Greed, Wrath, Pride, Sloth |
| Q2 | $1,200 unexpected car repair | Stress response, financial reasoning | Wrath, Sloth, Gluttony, Pride |
| Q3 | Completely free weekend | Leisure priorities, intro/extroversion | Lust, Sloth, Gluttony, Envy |
| Q4 | Group project free rider | Conflict handling, assertiveness | Wrath, Pride, Sloth, Envy |
| Q5 | Friend emergency vs. date | Loyalty trade-offs | Lust, Pride, Sloth, Wrath |
| Q6 | Critical feedback on blind spot | Ego resilience, growth | Pride, Wrath, Sloth, Envy |

### Response Constraints
| Constraint | Value | Rationale |
|-----------|-------|-----------|
| Minimum words | 25 | Sufficient signal for AI parsing |
| Maximum words | 150 | Manageable cognitive load |
| Format | Free-text | Enables nuanced extraction |

### Output: 7 Sin Dimensions (Bipolar Scale)
| Sin | Weight | Scale | -5 Anchor (Virtue) | +5 Anchor (Vice) |
|-----|--------|-------|--------------------|--------------------|
| Wrath | 1.5× | -5 to +5 | Extreme conflict avoidance | Explosive anger |
| Sloth | 1.3× | -5 to +5 | Extremely proactive | Avoidant, passive |
| Pride | 1.2× | -5 to +5 | Deeply humble | Ego-driven, status-seeking |
| Lust | 1.0× | -5 to +5 | Very restrained | Highly impulsive |
| Greed | 0.9× | -5 to +5 | Extremely generous | Highly materialistic |
| Gluttony | 0.8× | -5 to +5 | Strict self-control | Strongly indulgent |
| Envy | 0.7× | -5 to +5 | Deeply content | Constantly competitive |

### Per-Score Fields
| Field | Type | Range | Description |
|-------|------|-------|-------------|
| `score` | float | -5.0 to +5.0 | Aggregated sin score |
| `confidence` | float | 0.0 to 1.0 | Parsing confidence |
| `evidence_samples` | array[string] | - | Verbatim quotes from responses |
| `quality_tier` | enum | high/moderate/low | Based on quality score |
| `quality_score` | float | 0-100 | Composite quality metric |

### Similarity Calculation
```
Step 1: trait_similarity = 1 - (|score_a - score_b| / 10)
Step 2: weighted_similarity = trait_similarity × avg_confidence × sin_weight
Step 3: similarity = Σ(weighted contributions) / 7.4
```

---

## Phase 3: Biological Compatibility (HLA/MHC)

### Input: Encrypted HLA Data
| Field | Type | Format | Source |
|-------|------|--------|--------|
| `source` | string | "23andMe_v5" etc. | DNA kit provider |
| `imputation_confidence` | float | 0.0-1.0 | HIBAG posterior probability |
| `ancestry_model` | string | "EUR", "EAS", etc. | Population model used |
| `snp_count` | integer | ~147 | Number of SNPs used |

### HLA Markers (3 Loci, 6 Alleles)
| Locus | Alleles | Format | Example |
|-------|---------|--------|---------|
| HLA-A | 2 | WHO nomenclature | A*01:01, A*03:01 |
| HLA-B | 2 | WHO nomenclature | B*07:02, B*08:01 |
| HLA-DRB1 | 2 | WHO nomenclature | DRB1*15:01, DRB1*03:01 |

### Per-Allele Fields
| Field | Type | Range |
|-------|------|-------|
| `allele_name` | string | WHO 4-digit format |
| `confidence` | float | 0.0-1.0 |
| `binding_characteristics` | string | Peptide groove analysis |
| `functional_significance` | string | Disease/pathogen associations |

### Scoring Formula
```
S_bio = (N_unique / N_total) × 100

Where:
  N_unique = Count of unique alleles in combined A+B pool
  N_total  = Total allele slots (6 for 3 loci × 2)
```

### Display Logic
| Score | Label | Action |
|-------|-------|--------|
| ≥75 | 🟢 Strong Chemistry | Show prominently |
| 50-74 | 🟡 Good Chemistry | Show normally |
| 25-49 | 🟠 Some Chemistry | Show subtle |
| <25 | ❌ HIDDEN | Do not display to user |

---

## Final Score: Willingness to Meet (WtM)

```
WtM = (0.4 × S_vis) + (0.3 × S_psych) + (0.3 × S_bio)

Range: 0-100
```

| Phase | Weight | Score Variable |
|-------|--------|---------------|
| Phase 1: Visual | 40% | S_vis |
| Phase 2: Psychometric | 30% | S_psych |
| Phase 3: Biological | 30% | S_bio |

---

## Report Output Levels

| Level | File | Audience | Content |
|-------|------|----------|---------|
| Level 3 | reasoning_chain.json | Admin | Raw calculations, full evidence |
| Level 2A | gemini_narrative.md | Admin/Research | AI psych/visual analysis |
| Level 2B | hla_gemini_analysis.md | Admin/Research | HLA scientific report |
| Level 1 | customer_summary.json | End User | Sanitized, friendly summary |

### Customer Summary Fields (Level 1)
| Field | Type | Example |
|-------|------|---------|
| `display_score` | integer | 75 |
| `badges` | array[string] | ["Instant Spark", "Strong Chemistry"] |
| `headline` | string | "A Classic 'Opposites Attract' Dynamic" |
| `body` | string | Friendly 2-sentence summary |
| `physical.score` | integer | 80 |
| `personality.score` | integer | 52 |
| `chemistry.score` | integer | 92 |
| `shared_traits` | array[string] | User-friendly trait descriptions |
| `conversation_starters` | array[string] | Suggested first messages |
