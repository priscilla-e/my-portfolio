import { useEffect, useState } from 'react';

/**
 * Custom hook to observe multiple sections of a webpage and identify the currently visible section.
 * Utilizes the Intersection Observer API to track visibility of specified elements within the viewport.
 *
 * @param {Array<string>} sectionIds - Array of string IDs for the DOM elements to be observed.
 * @returns {string} The ID of the currently active (visible) section. Returns empty string if no section is active.
 */
const useSectionObserver = (sectionIds) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Create an observer instance with specified thresholds
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Set the active section when an element is intersecting
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: [0.5, 0.75, 1] });

        // Observe each element specified in sectionIds
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        // Cleanup: Unobserve all elements when component unmounts or observed elements change
        return () => {
            sectionIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, [sectionIds]);

    return activeSection;
};

export default useSectionObserver;